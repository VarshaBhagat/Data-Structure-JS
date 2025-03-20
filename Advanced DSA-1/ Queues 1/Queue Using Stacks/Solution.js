class UserQueue {
  constructor() {
    // Initialize your data structure here.
    this.s1 = [];
    this.s2 = [];
  }

  push(X) {
    // Push element X to the back of queue.
    return this.s1.push(X);
  }

  pop() {
    // Removes the element from in front of queue and returns that element.
    if (this.s2.length == 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  peek() {
    // Get the front element of the queue.
    if (this.s2.length == 0) {
      while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2[this.s2.length - 1];
  }

  empty() {
    // Returns whether the queue is empty.
    return this.s1.length == 0 && this.s2.length == 0;
  }
}

/**
 * Your UserQueue object will be instantiated and called as such:
 * const obj = new UserQueue();
 * obj.push(X);
 * const param2 = obj.pop();
 * const param3 = obj.peek();
 * const param4 = obj.empty();
 */
