class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let node = new BSTNode(val);
    if(this.root === null) return this.root = node;
    let current = this.root;
    while(current !== null) {
      if(val < current.val) {
        if(current.left !== null) {
          current = current.left;
        }
        else {
          current.left = new BSTNode(val);
          return this;
        }
      }
      else if(val > current.val) {
        if(current.right !== null) {
          current = current.right;
        }
        else {
          current.right = new BSTNode(val);
          return this;
        }
      }
      else {
        return this;
      }
    }
  }


  search(val) {
    if(this.root === null) return undefined;
    if(this.root.val === val) return this.root;
    let current = this.root;

    while(current !== null) {
      if(val < current.val) {
        current = current.left;
      }
      else if(val > current.val) {
        current = current.right;
      }
      else if(current.val === val) {
        return current;
      }
      else {
        current = null;
      }
    }
    return "Not found"
  }


}

class BSTNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  
}

let tree = new BST();
console.log(tree);
tree.insert(30);
tree.insert(10);
tree.insert(40);
tree.insert(50);
tree.insert(50);
tree.insert(100);
console.log(tree.search(10));
//console.log(tree);