const jsonp = (url, params, cb) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    // 定义回调函数
    window[cb] = data => {
      resolve(data)
      // 在回调执行后去除元素
      document.body.removeChild(script)
    }
    params = {
      ...params,
      callback: cb
    }
    const arr = Object.keys(params).map(key => `${key}=${params[key]}`) //对参赛进行处理，拼接成一个数组
    script.src = `${url}?${arr.join('&')}` // 拼接成一个字符串
    document.appendChild(script)
  })
}
