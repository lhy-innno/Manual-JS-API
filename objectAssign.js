Object._assign = function (target, ...source) {
  if (target === null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  let ret = Object(target)
  source.forEach(obj => {
    if (obj !== null) {
      for (let key in obj) {
        if (Object.hasOwnProperty(key)) {
          target[key] = obj[key]
        }
      }
    }
  })
  return ret
}
// let ss = 1
// for (let item in ss) {
//   console.log(item)
// }
// Object.assign2 = function(target, ...source) {
//   if (target == null) {
//     throw new TypeError('Cannot convert undefined or null to object')
//   }
//   let ret = Object(target)
//   source.forEach(function(obj) {
//     console.log(obj)
//     if (obj != null) {
//       for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//           ret[key] = obj[key]
//         }
//       }
//     }
//   })
//   return ret
// }
// let ss = {
//   a:1,
//   b:[1,2,5,2]
// }
// let ssd = {
//   c:2,
//   d:[1,2,5,3]
// }
// console.log(Object.assign2({}, ss, ssd))
