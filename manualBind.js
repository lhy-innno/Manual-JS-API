Function.prototype.binD = function (context) {
  if (typeof this !== 'function') {
    throw new Error('Type Error')
  }
  // 获取参数
  let args = [...arguments].slice(1)
  let fn = this
  return function () {
    return fn.apply( this instanceof fn ? new fn(...arguments) : context, args.concat(...arguments))
  }
}
