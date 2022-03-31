// 方法1,时间戳,可以立即执行
let throttle1 = (func, wait) => {
  let pre = 0
  return function () {
    let now = +new Date()
    if (now - pre > wait) {
      func.apply(this, arguments)
      pre = now
    }
  }
}

// 方法2，使用定时器，不能立即执行
let throttle2 = (func, wait) => {
  let timeout
  return function () {
    if (!timeout) {
      timeout = setTimeout(function () {
        func.apply(this, arguments)
        timeout = null
      }, wait)
    }
  }
}
