module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList: function (A) {
    let curr = A,
      next,
      prev = null;
    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  },
};
