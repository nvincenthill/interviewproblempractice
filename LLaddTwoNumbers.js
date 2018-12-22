// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let l1Current = l1;
  let l2Current = l2;

  while (l1Current || l2Current) {
    let l1Value = l1Current ? l1Current.val : 0;
    let l2Value = l2Current ? l2Current.val : 0;
    let nextValue = l1Value + l2Value + carry;
    let remainder = nextValue % 10;
    carry = Math.floor(nextValue / 10);
    if (l1Current) {
      l1Current.val = remainder;
    } else {
      l1Current = new ListNode(0);
      l1Current.val = remainder;
    }

    l1Current = l1Current ? l1Current.next : null;
    l2Current = l2Current ? l2Current.next : null;
  }

  if (carry) {
    l1.next = new ListNode(carry);
  }

  return l1;
};
