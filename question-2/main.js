class Stack {
  constructor() {
    this.stack = [];
    this.top = 0;
  }

  push(...items) {
    items.forEach((item) => {
      this.stack[this.top] = item;
      this.top = this.top + 1;
    });
  }

  length() {
    return this.top;
  }

  pop() {
    if (this.isEmpty()) return;
    this.top = this.top - 1;
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.top - 1];
  }

  isEmpty() {
    return this.top === 0;
  }

  print() {
    let top = this.top - 1;
    while (top >= 0) {
      console.log(this.stack[top]);
      top--;
    }
  }

  reverse() {
    let stack = new Stack();
    while (!this.isEmpty()) {
      stack.push(this.pop());
    }
    return stack;
  }
}

// stack example
let stack = new Stack();
console.log("Add 1, 2, 3, 4, 5 to stack");
stack.push(1, 2, 3, 4, 5);
console.log("Stack is empty: ", stack.isEmpty());
console.log("Stack length: ", stack.top);
console.log("Stack peek: ", stack.peek());
console.log("Pop stack: ", stack.pop());
console.log("Stack length: ", stack.top);
console.log("Print stack: ");
stack.print();

// reverse stack
let reversedStack = stack.reverse();
console.log("Reversed stack: ");
reversedStack.print();
// pop all items
console.log("Pop all items from stack");
while (!reversedStack.isEmpty()) {
  console.log(reversedStack.pop());
}
console.log("Stack is empty: ", reversedStack.isEmpty());
