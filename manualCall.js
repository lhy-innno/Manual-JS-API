Function.prototype.ca11 = function (context) {
  // 若参数为空则指向全局对象
  var context = context || globalThis
  // 让调用这个函数的函数作为此对象的一个属性
  context.fuc = this
  let args = []
  for (let i = 1; i<arguments.length; i++) {
    args.push(arguments[i])
  }
  // 执行函数，这样执行此函数时，this指向context对象
  let ret = context.fuc(...args)
  // 把之前自定义的函数删除
  delete context.fuc
  // 返回值
  return ret
}

var val = 2
let obj = {
  val: 1
}
let func = function (num1, num2) {
  console.log(this.val)
  return {
    ssd: 'haha',
    num1: num1,
    num2: num2
  }
}
console.log(func.ca11(obj, 3, 45))
