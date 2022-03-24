// 方法1，递归
let flatten1 = array => {
  let res = []
  for (let item of array) {
    if (Array.isArray(item)) {
      res = res.concat(flatten1(item))
    } else {
      res.push(item)
    }
  }
  return res
}
// 方法2，转化为字符串，再转化为数字
let flatten2 = array => {
  return array.toString().split(',').map(item => +item)
}
