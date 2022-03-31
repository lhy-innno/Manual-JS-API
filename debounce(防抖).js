// 复杂版
let debounce1 = (func, wait, immediate) => {
  let timeout, res
  return function () {
    // 让this指向正确的对象
    let context = this
    // 获取event对象
    let args = arguments
    // 停止计时
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 判断倒计时结束没有，若结束了就可以立即执行
      let callNow = !timeout
      if (callNow) res = func.apply(context, args)
      // 倒计时结束还是没结束都要重新计时
      timeout = setTimeout(function () {
        // 把值设为空，意味着可以立即执行
        timeout = null
      }, wait)
      // 没有选择立即执行的情况
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return res
  }
}

// 简单版
let debounce2 = (func, wait) => {
  let timeout
  return function () {
    let args = arguments
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(function () {
      func.apply(this, args)
    }, wait)
  }
}

// 极简版
function debounce3 (fn, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = setTimeout(fn, delay)
  }
}
