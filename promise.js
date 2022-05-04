
class _Promise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }


  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : reason => throw reason

    let thenPromise = new _Promise((resolve, reject) => {
      const resolvePromise = cb => {
        setTimeout(() => {
          try {
            const x = cb(this.value)
            if (x === thenPromise) {
              return new Error("不能返回自身")
            }
            if (x instanceof _Promise) {
              x.then(resolve, reject)
            } else {
              resolve(x)
            }
          } catch (err) {
            reject(err)
            throw new Error(err)
          }
        })
      }
      if (this.state === 'fulfilled') {
        resolvePromise(onFulfilled)
      } else if (this.state === 'reject') {
        resolvePromise(onRejected)
      } else if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(resolvePromise.bind(this, onFulfilled))
        this.onRejectedCallbacks.push(resolvePromise.bind(this, onRejected))
      }
    })
    return thenPromise
  }


  resolve(value) {
    if (this.state !== 'pending') {
      return
    }
    this.state = 'fulfilled'
    this.value = value
    while(this.onFulfilledCallbacks.length) {
      this.onFulfilledCallbacks.shift()(this.value)
    }
  }

  reject (value) {
    if (this.state !== 'pending') {
      return
    }
    this.state = 'rejected'
    this.value = value
    while(this.onRejectedCallbacks.length) {
      this.onRejectedCallbacks.shift()(this.value)
    }
  }

  static all(promises) {
    const res = []
    let count = 0
    return new _Promise((resolve, reject) => {
      let addData = (index, value) => {
        res[index] = value
        count++
        if (count === promises.length) {
          resolve(res)
        }
      }
      promises.forEach((promise, index) => {
        if (promise instanceof _Promise) {
          promise.then(res => {
            addData(index, res)
          }, err => reject(err))
        } else {
          addData(index, promise)
        }
      })
    })
  }

  static race(promises) {
    return new _Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        if (promise instanceof _Promise) {
          promise.then(res => {
            resolve(res)
          }, err => reject(err))
        } else {
          resolve(promise)
        }
      })
    })
  }

  static allSettled(promises) {
    let res = []
    return new _Promise(((resolve, reject) => {
      let addData = (index, value, state) => {
        res[index] = [value, state]
        if (promises.length === res.length) {
          resolve(res)
        }
      }
      promises.forEach((promise, index) => {
        if (promise instanceof _Promise) {
          promise.then(res => {
            addData(index, res, 'fulfilled')
          }, err => {
            addData(index, err, 'rejected')
          })
        } else {
          addData(index, promise, 'fulfilled')
        }
      })
    }))
  }

  static any(promises) {
    return new Promise((resolve, reject) =>{
      let count = 0
      promises.forEach((promise) => {
        promise.then(val => {
          resolve(val)
        }, err => {
          count++
          if (count === promises.length) {
            reject (new AggregateError("全部错误"))
          }
        })
      })
    })
  }
}


