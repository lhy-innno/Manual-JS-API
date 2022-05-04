function sum1(arr) {
  return arr.reduce((pre, cur) => pre+cur, 0)
}

console.log(sum1([2,3,6,9]))

function sum2(arr) {
  return arr.toString().split(',').reduce((pre, cur) => pre+Number(cur), 0)
}

console.log(sum2([1,8,3,[2,4,[3,71]], 20]))

function sum3(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  return arr[0] + sum3(arr.slice(1))
}

console.log(sum3([3,5,9,1]))
