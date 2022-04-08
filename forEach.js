Array.prototype._forEach = function (fn, context) {
  var context = context
  if (typeof fn !== 'function') {
    throw new TypeError(fn+"不是一个函数！")
  }
  for (let i = 0; i<this.length; i++) {
    fn.call(context, this[i], i, this)
  }
}
let ss = [1,3,5,9,3,1]
let pp = []
ss._forEach((item, index) => {
  if (item>3) {
    pp.push(item)
  }
})
console.log(pp)
