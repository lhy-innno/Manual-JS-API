function deepClone1(obj, hash = new WeakMap()) {
  if (!obj) return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (typeof obj !== 'object') return obj
  if (hash.get(obj)) return obj
  let newObj = new obj.constructor()
  hash.set(obj, 1)
  for (let item in obj) {
    if (obj.hasOwnProperty(item)) {
      newObj[item] = deepClone1(obj[item], hash)
    }
  }
  return newObj
}

/*
    这种方式较为常用，但是不能处理循环引用、函数、symbol、undefined等等情况
*/
let deepClone2 = obj => {
  return JSON.parse(JSON.stringify(obj))
}


let obg = {
  aaa: 1,
  jj: 'd',
  ss: [4,2]
}
obg.ccc = obg
let rr = deepClone1(obg)
console.log(rr)
