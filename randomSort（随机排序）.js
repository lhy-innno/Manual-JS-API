let RandomSort = array => {
  return array.sort((a, b) => {
    return Math.random() > 0.5 ? -1 : 1
  })
}

console.log(RandomSort([40, 1, 5, 200]))
