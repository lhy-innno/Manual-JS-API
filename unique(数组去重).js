let array = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}]

// 方法一，用filter方法和indexOf方法
let unique1 = array => {
  return array.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}

// 方法2,利用Set中的元素不可重复
let unique2 = [...new Set(array)]

// 方法3，同样是利用Set的不可重复，用Array.from生成数组
let unique3 = array => {
  let set = new Set(array)
  return Array.from(set)
}

// 方法4，利用JS的reduce()方法和includes()方法
let unique4 = array => {
  return array.reduce((pre, cur) => pre.includes(cur) ? pre : [...pre, cur], [])
}

// 方法5，双重循环遍历
// 方法6，单重循环，哈希表
