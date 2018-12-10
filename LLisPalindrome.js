// I - LL of integers
// O - boolean
// C - O(n) time and O(1) space
// E - head === null

function isListPalindrome(head) {
  if (head === null || head.next === null) {
    return true;
  }
  let slow, fast;
  slow = head;
  fast = head;

  while (fast !== null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }

  let front = head;
  let reversed = reverse(slow);

  while (reversed !== null) {
    if (front.value != reversed.value) {
      return false;
    }
    front = front.next;
    reversed = reversed.next;
  }

  return true;
}

function reverse(list) {
  if (list == null || list.next == null) {
    return list;
  }

  let first = list;
  let second = list.next;
  let third = second.next;

  list.next = null;
  while (second != null) {
    third = second.next;
    second.next = first;
    first = second;
    second = third;
  }

  return first;
}
