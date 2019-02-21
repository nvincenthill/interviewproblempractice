// Implement a "special" queue that has three priority values (0, 1, 2), and it dequeues in increasing order (0 --> 1 --> 2). If no values are in the queue, return null. If there are two or more values of the same priority number, dequeue the first value that was inserted into the special queue.

// Hint #1
// When you call enqueue() the queue adds an object with a priority and a value. When dequeue() is called the objects leave the queue in priority order one at a time on each invocation (all high priority items leave first, then all medium priority items, then all low priority items).

const SpecialQueue = function() {
  this.storage = {
    '0': [],
    '1': [],
    '2': []
  };
};

// takes in two arguments, value and priority
SpecialQueue.prototype.enqueue = function(value, priority) {
  if (priority >= 0 && priority <= 2) {
    this.storage[priority].push(value);
  } else {
    return 'Priority level not allowed';
  }
};

// returns the highest priority value
SpecialQueue.prototype.dequeue = function() {
  if (this.storage[0].length > 0) {
    return this.storage[0].shift();
  } else if (this.storage[1].length > 0) {
    return this.storage[1].shift();
  } else if (this.storage[2].length > 0) {
    return this.storage[2].shift();
  } else {
    return null;
  }
};

var queue = new SpecialQueue();

queue.enqueue('blah', 2);
queue.enqueue('blahblah', 1);
queue.enqueue('blahblahblah', 0);

console.log(queue.dequeue()); // 'blahblahblah'
console.log(queue.dequeue()); // 'blahblah'
console.log(queue.dequeue()); // 'blah'
