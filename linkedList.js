class Node {

  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }


  //puts node on back of list
  push(val) {
    if(this.head === null) {
      this.head = new Node(val);
      this.tail = this.head;
    }
    else {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }

  //removes node form end of list
  pop() {
    if(!this.head) return undefined;
    
    let current = this.head;
    let prev = null;

    while(current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  //moves head node up by one
  shift() {
    if(this.head === null) return undefined;
    this.head = this.head.next;
    this.length--;
    return this;
  }

  //adds a node to the beginning of the list
  unshift(val) {
    let newHead = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
      return this;
    }
  }

  get(index) {
    if(index === 0) return this.head;

    let current = this.head;
    for(let i = 0;i < this.length; i++) {
      if(index === i) return current;
      else {
        current = current.next;
      } 
    }
    console.log("not found");
    return null;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode === null) return null;
    foundNode.val = val;
  }

  insert(index, val) {
    let node = new Node(val);
    let current = this.head;
    let prev = null;

    if(index < 0 || index > this.length) return console.log("out of bounds")
    if(this.isEmpty()) {
      this.head = node;
      this.tail = node;
      return this;
    }

    if(index === 0) {
      this.unshift(val);
      return this;
    }

    if(index === this.length - 1) {
      this.push(val);
    }
    
    for(let i = 0;i < this.length; i++) {
      if(index === i) {
        prev.next = node;
        node.next = current;
      }
      else {
        prev = current;
        current = current.next;
      }
    }
    this.length++;
    return this;
  }

  remove(index) {
    let current = this.head;
    let prev = null;

    for(let i = 0;i < this.length; i++) {
      if(index === i) {
        prev.next = current.next;
        current.next = null;
        return console.log(current);
      }
      else {
        prev = current;
        current = current.next;
      }
    }
  }

  add() {
    return this.head.val + this.tail.val;
  }

  static sayHello() {
   console.log("Hello");
  }
}






let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.remove(2);
console.log(list.get(1));

