class OneNode {
  prev: OneNode | null;
  value: number;
  next: OneNode | null;

  constructor(value: number) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class Queue {
  head: null | OneNode;
  tail: null | OneNode;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value: number) {
    let newNode = new OneNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }

  remove() {
    if (this.head !== null) {
      this.head = this.head.next;
    }
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value, "--> ");
      currentNode = currentNode.next;
    }
  }
}

const RunQueueOperation = () => {
  let queueOne = new Queue();
  queueOne.add(30);
  queueOne.add(60);
  queueOne.add(90);
  queueOne.traverse();
  console.log("--------------");
  queueOne.remove();
  queueOne.add(120);
  queueOne.remove();
  queueOne.remove();
  queueOne.remove();
  queueOne.traverse();
};

export { RunQueueOperation };
