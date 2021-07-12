class QueueArr {
  constructor() {
    this.array = [];
    this.front = -1;
    this.back = -1;
    this.length = 0;
  }

  enqueue(val) {
    this.back++;
    this.array[back] = val;
    this.length++;
  }

  dequeue() {
    this.front++;
    this.array[front] = null;
    this.length--;
  }

  getFront() {
    return this.array[front];
  }
}

