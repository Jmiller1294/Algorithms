class Stack {
  constructor() {
    this.top = -1;
    this.length = 0;
    this.array = [];
  }

  push(val) {
    this.top++;
    this.array[this.top] = val;
    this.length++;
    return this;
  }

  pop() {
    this.array[this.top] = null;
    this.top--;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  reportTop() {
    return this.array[this.top];
  }

  
}

let stack = new Stack();
console.log(stack.array);
stack.push(1)
stack.push(2)
stack.push(3);
stack.pop();
console.log(stack.reportTop());
