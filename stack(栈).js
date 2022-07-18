class Stack  {
    constructor() {
        this.stack = []
    }
    push(el) {
        this.stack.push(el)
    }
    pop() {
        this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    clear() {
        this.stack = []
    }
    isEmpty() {
        return this.stack.length === 0
    }
    size() {
        return this.stack.length
    }
}
