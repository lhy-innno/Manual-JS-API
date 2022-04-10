Object._create = function (obj, propertyObject = undefined) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError('必须为对象')
  }
  if (propertyObject === null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  function Fn() {}
  Fn.prototype = obj
  let newObj = new Fn()
  if (propertyObject !== undefined) {
    Object.defineProperties(newObj, propertyObject)
  }
  if (!obj) {
    newObj.__proto__ = obj
  }
  return newObj
}

