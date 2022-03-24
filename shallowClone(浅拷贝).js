// 方法1，遍历
let ShallowClone1 = obj => {
  let newObj = {}
  for (let item in obj) {
    // 判断属性是否在其原型链上
    if (obj.hasOwnProperty(item)) {
      newObj[item] = obj[item]
    }
  }
  return newObj
}

// 方法2，Object.assign()
let ShallowClone2 = obj => {
  return Object.assign({}, obj)
}

// 方法3，slice
let ShallowClone3 = obj => {
  return obj.slice(0)
}
