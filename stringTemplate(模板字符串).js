function render(template, data) {
  let reg = /\{\{(\w+)\}\}/
  // 判断模板里是否有模板字符串
  if (reg.test(template)) {
    // 查找第一个模板字符串的字段
    const name = reg.exec(template)[1]
    // 渲染
    template = template.replace(reg, data[name])
    // 用递归来渲染后面的模板字符串
    return render(template, data)
  }
  // 如果没有要渲染的模板字符串了就返回
  return template
}

