let curry = fn => {
  function judge (...args) {
    if (args.length === fn.length) {
      return fn(...args)
    }
    return (...arg) => judge(...args, ...arg)
  }
  return judge
}
function add (a, b, c, d) {
  return a+b+c+d
}


let ss = curry(add)
console.log(ss(2)(7,8)(3))


