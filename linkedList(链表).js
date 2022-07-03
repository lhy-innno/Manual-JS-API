// 通过函数的方式定义
function ListNode1 (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}



// 通过类来定义
class ListNode2 {
  // 通过预先声明字段，类定义变得更加自我记录，并且字段始终存在。
  val
  next = null;
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

