class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  // Add a new item to the top of our stack. If the item is greater
  // than or equal to the last item in maxesStack, it's
  // the new max! So we'll add it to maxesStack.
  push(item) {
    this.stack.push(item);
    if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
  }

  // Remove and return the top item from our stack. If it equals
  // the top item in maxesStack, they must have been pushed in together.
  // So we'll pop it out of maxesStack too.
  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }

  // The last item in maxesStack is the max item in our stack.
  getMax() {
    return this.maxesStack.peek();
  }
}

// Tests
const s = new MaxStack();
s.push(5);

assertEquals(5, s.getMax(), "check max after 1st push");

s.push(4);
s.push(7);
s.push(7);
s.push(8);

assertEquals(8, s.getMax(), "check before 1st pop");
assertEquals(8, s.pop(), "check pop #1");
assertEquals(7, s.getMax(), "check max after 1st pop");
assertEquals(7, s.pop(), "check pop #2");
assertEquals(7, s.getMax(), "check max after 2nd pop");
assertEquals(7, s.pop(), "check pop #3");
assertEquals(5, s.getMax(), "check max after 3rd pop");
assertEquals(4, s.pop(), "check pop #4");
assertEquals(5, s.getMax(), "check max after 4th pop");

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
