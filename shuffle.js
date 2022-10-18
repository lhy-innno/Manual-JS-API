let shuffle1 = arr => {
  let len = arr.length
  while (len) {
    let random = Math.floor(Math.random()*len)
    len--
    [arr[len], arr[random]] = [arr[random], arr[len]]
  }
  return arr
}

let shuffle2 = arr => {
  arr.sort(() => .5-Math.random())
  return arr
}

console.log(shuffle1([1,5,8,3,5,8,2,7,2,77,100]))
console.log(shuffle2([1,5,8,3,5,8,2,7,2,77,100]))
