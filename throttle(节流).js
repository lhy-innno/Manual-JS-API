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


let throttle3 = (fn, delay) => {
  let pre = 0
  let now, args, context
  let timer = null
  let later = function () {
    timer = null
    pre = now
    fn.call(context, args)
  }
  return function () {
    args = arguments
    context = this
    now = +new Date()
    let remain = delay - (now - pre)
    if (remain<=0) {
      pre = now
      fn.apply(context, args)
    } else if (!timer) {
      setTimeout(later, remain)
    }
  }
}
