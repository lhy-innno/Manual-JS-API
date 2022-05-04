let trim = str => {
  return str.replace(/^\s+|\s+$/gm, '')
}
console.log(trim(' dd   '))

let trim2 = str => {
  return str.replace(/^\s*(.*)\s*$/g, '$1')
}

console.log(trim2(' 13 23 13a '))

