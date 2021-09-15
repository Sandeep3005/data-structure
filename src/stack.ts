class Stack {
  items: string[] | number[];
  size: number;

  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(value: number | string) {
    this.items[++this.size] = value;
  }

  pop() {
    this.items.pop();
  }

  traverse() {
    this.items.forEach((x) => {
      console.log("x", x);
    });
  }
}

const RunStackOperation = () => {
  let stackOne = new Stack();

  stackOne.push(3);

  stackOne.push(30);

  stackOne.push(300);

  stackOne.traverse();

  stackOne.pop();

  stackOne.traverse();
};

export default RunStackOperation;
