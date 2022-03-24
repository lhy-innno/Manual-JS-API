// 手动实现intanceof方法
// 本质就是判断一个构造函数的prototype是不是在一个实例的原型链上
function _instanceof (L, R) {
  if (typeof L !== 'object') {
    return false
  }
  L = L.__proto__
  R = R.prototype
  while (1) {
    if (!L) {
      return false
    }
    if (L === R) {
      return true
    }
    // 不停的在原型链上查找
    L = L.__proto__
  }
}

console.log(4 instanceof Object)
