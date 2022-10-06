function ajax(method, url, data) {
  let xhr = new XMLHttpRequest()
  return new Promise((resolve, reject) => {
    xhr.open(method, url)
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText)
        } else {
          reject(xhr.statusText)
        }
      }
    }
    xhr.send(data)
  })
}
