class QueueArr {
  constructor() {
    this.array = [];
    this.front = 0;
    this.back = -1;
    this.length = 0;
  }

  enqueue(val) {
    this.back++;
    this.array[this.back] = val;
    this.length++;
  }

  dequeue() {
    this.array[this.front] = null;
    this.front++;
    this.length--;
  }

  getFront() {
    return this.array[this.front];
  }
}

let queue = new QueueArr();
console.log(queue.array);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);
queue.dequeue();
console.log(queue.array);
console.log(queue.getFront());

