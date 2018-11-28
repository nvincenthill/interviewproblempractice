var LRUCache = function(limit) {
  // A map of key/LRUCacheItem pairs for constant time lookup
  this._items = {};

  // A list of LRUCacheItem.node
  this._ordering = new List(); // cache stored as a doubly linked list
  this._limit = limit || 10000;
  this._size = 0;
};

var LRUCacheItem = function(val, key) {
  this.val = val === undefined ? null : val;
  this.key = key === undefined ? null : key;
  this.node = null;
};

LRUCache.prototype.size = function() {
  return this._size;
};

LRUCache.prototype.get = function(key) {
  if (!(key in this._items)) {
    return -1;
  }

  var item = this._items[key];
  this.promote(item);
  return item.val;
};

LRUCache.prototype.put = function(key, val) {
  var item;
  if (key in this._items) {
    item = this._items[key];
    item.val = val;
    this.promote(item);
  } else {
    if (this.full()) {
      this.prune();
    }
    this._size += 1;

    // instantiate a new item and map it
    item = new LRUCacheItem(val, key);
    item.node = this._ordering.unshift(item);
    this._items[key] = item;
  }
};

LRUCache.prototype.full = function() {
  return this._size >= this._limit;
};

LRUCache.prototype.prune = function() {
  var oldest = this._ordering.pop();
  delete this._items[oldest.key];
  this._size = Math.max(0, this._size - 1);
};

LRUCache.prototype.promote = function(item) {
  this._ordering.moveToFront(item.node);
};

var List = function() {
  this.head = null;
  this.tail = null;
};

var ListNode = function(prev, val, next) {
  this.prev = prev || null;
  this.val = val;
  this.next = next || null;
};

List.prototype.unshift = function(val) {
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  } else {
    this.head = new ListNode(null, val, this.head);
    this.head.next.prev = this.head;
  }

  return this.head;
};

List.prototype.shift = function() {
  if (this.head === null && this.tail === null) {
    return null;
  } else {
    var head = this.head;
    this.head = this.head.next;
    head.delete();
    return head.val;
  }
};

List.prototype.push = function(val) {
  if (this.head === null && this.tail === null) {
    this.head = this.tail = new ListNode(null, val, null);
  } else {
    this.tail = new ListNode(this.tail, val, null);
    this.tail.prev.next = this.tail;
  }

  return this.tail;
};

List.prototype.pop = function() {
  if (this.head === null && this.tail === null) {
    return null;
  } else {
    var tail = this.tail;
    this.tail = this.tail.prev;
    tail.delete();
    return tail.val;
  }
};

List.prototype.moveToFront = function(node) {
  if (node === this.tail) {
    this.pop();
  } else if (node === this.head) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  } else {
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
};

List.prototype.moveToEnd = function(node) {
  if (node === this.head) {
    this.shift();
  } else if (node === this.tail) {
    return;
  } else {
    node.delete();
  }

  node.prev = node.next = null;

  if (this.head === null && this.tail === null) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
};

ListNode.prototype.delete = function() {
  if (this.prev) {
    this.prev.next = this.next;
  }
  if (this.next) {
    this.next.prev = this.prev;
  }
};
