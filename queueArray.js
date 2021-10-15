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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const reverseList = function(head) {
  if(head === null) return head;
  
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let prev = null;
  let curr = dummyHead.next;
  let succ = curr.next;
   
  while(curr !== null) {
      curr.next = prev;
      prev = curr;
      curr = succ;
      if(succ) succ = succ.next;  
  }
 
  return prev;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    
    
  const newList = new ListNode(0, null);
  let curr = newList;
  
  while(l1 && l2) {
      if(l1.val < l2.val) {
          curr.next = l1;
          l1 = l1.next;
      }
     else {
          curr.next = l2;
          l2 = l2.next;
      }
      curr = curr.next;
  }
  return newList.next;   
};