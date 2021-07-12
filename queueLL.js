class QueueLL {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(val) {
    let node = new Node(val);
    if(this.front === null) {
      this.front = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }
    this.length++;
  }
  
  dequeue() {
    let temp;
    if(this.front === null) return null;
    if(this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      temp = this.front;
      this.front = this.front.next;
    }
    this.length--;
    return temp;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let queue = new QueueLL();
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
queue.dequeue();
console.log(queue);