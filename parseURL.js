let url = 'https://fe.ecool.fun/topic/da1881cc-64b9-40f8-8a25-a6256c1349ed?orderBy=updateTime&order=desc&titleKey=%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A'
let parseURL = url => {
  const paramStr = /.+\?(.+)$/.exec(url)[1]
  const paramArr = paramStr.split('&')
  let paramObj = {}
  paramArr.forEach(item => {
    if (/=/.test(item)) {
      let [key, val] = item.split('=')
      val = decodeURIComponent(val)
      val = /^\d+$/.test(val) ? parseFloat(val) : val
      if (paramObj.hasOwnProperty(key)) {
        paramObj[key] = paramObj[key].concat(val)
      } else {
        paramObj[key] = val
      }
    } else {
      paramObj[item] = true
    }
  })
  return paramObj
}

console.log(parseURL(url))
