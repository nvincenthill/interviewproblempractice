// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

const removeElements = function(head, val) {
  if (head === null) {
    return null;
  }

  while (head !== null && head.val === val) {
    head = head.next;
  }

  let current = head;
  let prev = null;
  const newList = current;
  while (current !== null) {
    if (current.val === val) {
      if (prev !== null) {
        prev.next = current.next;
      }
    } else {
      prev = current;
    }

    current = current.next;
  }
  return newList;
};
