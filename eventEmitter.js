class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off(name, fn) {
    let tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit(name, once, ...args) {
    if (this.cache[name]) {
      let tasks = this.cache[name].slice()
      for (let item of tasks) {
        item(...args)
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

let eventBus = new EventEmitter()
function user1 (content) {
  console.log(`用户1订阅了${content}`)
}

function user2 (content, age) {
  console.log(`用户2订阅了${content}, 他${age}岁`)
}

function user3 (content) {
  console.log(`用户3订阅了${content}`)
}

eventBus.on('yellow book', user1)
eventBus.on('yellow book', user2)
eventBus.on('red book', user3)

eventBus.emit('yellow book', false, '金瓶梅', 8)
eventBus.emit('yellow book', false, '肉蒲团', 9)

eventBus.off('yellow book', user1)

eventBus.emit('red book', false, '傻逼', 99)
eventBus.emit('yellow book', false, '傻逼', 7)

