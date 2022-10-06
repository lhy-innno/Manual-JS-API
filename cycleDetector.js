let CycleDetector = obj => {
  let arr = [obj]
  let flag = 1
  let cycle = object => {
    let keys = object.keys(object)
    for (const key of keys) {
      const value = object[key]
      if (typeof value === 'object' && value !== null) {
        if (arr.indexOf(value)) {
          flag = 0
          return
        }
        arr.push(value)
        cycle(value)
      }
    }
  }
  cycle(obj)
  return flag
}
