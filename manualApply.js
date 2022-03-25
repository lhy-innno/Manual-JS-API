Function.prototype.app1y = function (context, array) {
  // 若参数为空则指向全局对象
  var context = context || globalThis
  // 让调用这个函数的函数作为此对象的一个属性
  context.fuc = this
  let ret
  if (!array) {
    ret = context.fuc()
  } else {
    let args = []
    for (let item of array) {
      args.push(item)
    }
    ret = context.fuc(...args)
  }
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
console.log(func.app1y(obj, [3, 45]))
