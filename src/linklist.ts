class SingleNode {
  value: string | number;
  next: null | SingleNode;
  constructor(value: string | number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  currentNode: null | SingleNode;
  size: number;
  head: null | SingleNode;
  constructor() {
    this.currentNode = null;
    this.head = null;
    this.size = 0;
  }

  add(value: string | number) {
    let newNode = new SingleNode(value);
    this.currentNode = this.getLast();
    // console.log("x", x);

    // this.currentNode = ;
    if (this.head === null) {
      this.head = newNode;
    } else {
      if (this.currentNode) {
        this.currentNode.next = newNode;
      }
    }
    this.size = ++this.size;
  }

  sizeOfList(): number {
    return this.size;
  }

  removeElement(value: string | Number) {
    this.currentNode = this.head;
    let prevNode = null;
    while (this.currentNode !== null) {
      if (this.currentNode.value === value) {
        if (prevNode === null) {
          this.head = this.currentNode.next;
        } else {
          prevNode.next = this.currentNode.next;
          this.currentNode = prevNode;
        }
      }
      prevNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
  }

  private getLast() {
    let prevNode: null | SingleNode = null;
    this.currentNode = this.head;
    while (this.currentNode !== null) {
      //console.log(this.currentNode.value);
      prevNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
    return prevNode;
  }

  traverse() {
    let prevNode: null | SingleNode = null;
    this.currentNode = this.head;
    while (this.currentNode !== null) {
      console.log(this.currentNode.value);
      prevNode = this.currentNode;
      this.currentNode = this.currentNode.next;
    }
  }
}

const RunLinkListOperation = () => {
  let linkListOne = new LinkedList();
  linkListOne.add(10);
  linkListOne.add(20);
  linkListOne.add(30);

  linkListOne.traverse();

  console.log("size ", linkListOne.sizeOfList());
  console.log("------------------");
  linkListOne.removeElement(30);

  linkListOne.traverse();
};

export { RunLinkListOperation };
