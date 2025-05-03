// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }
function reverseList(A) {
  let curr = A,
    prev = null,
    next;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
module.exports = {
  //param A : head node of linked list
  //return an integer

  lPalin: function (A) {
    let temp1 = JSON.stringify(A);

    let rev = reverseList(A);

    temp1 = JSON.parse(temp1);
    while (temp1 != null && rev != null) {
      if (temp1.data != rev.data) {
        return 0;
      }
      temp1 = temp1.next;
      rev = rev.next;
    }

    return 1;
  },
};
