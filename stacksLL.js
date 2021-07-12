class StackLL {
  constructor() {
    this.first;
    this.last;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    let tempNode;
    if(this.first === null) {
      this.first = node;
      this.last = node;
    }
    else {
      tempNode = this.first;
      this.first = node;
      this.first.next = tempNode;
    }
    return ++this.length;
  }

  pop() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--
    return temp.val
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
let list = new StackLL();


console.log(list.push(1));
console.log(list.push(2));
console.log(list.pop());