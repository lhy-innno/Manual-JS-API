// 手动实现new操作符
function New() {
  // 建立一个新的对象
  let obj = {}
  // 把函数的参数转化为一个数组，并且移除第一个参数（构造函数），将其赋值给Constructor
  let Constructor = [].shift.call(arguments)
  // 让新的对象基础构造函数原型上的方法
  obj.__proto__ = Constructor.prototype
  // 执行构造函数，并使用apply方法把this指向新的对象
  let ret = Constructor.apply(obj, arguments)
  // 判断返回值是否为对象，若不是，该返回什么就返回什么
  return typeof ret === 'object' ? ret : obj
}

let ss = function (a, b) {
  this.a = a
  this.b = b
  this.c = function () {
    console.log(111)
  }
}

let fdd = New(ss, 33, 68)
console.log(fdd)
