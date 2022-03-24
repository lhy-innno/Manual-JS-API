const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class Promise {
  constructor() {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined

  }
}
