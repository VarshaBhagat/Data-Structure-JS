// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : head node of linked list
  //return an integer
  solve: function (A, B) {
    let head1 = A;
    let head2 = B;
    let c1 = 0;
    let c2 = 0;
    while (head1 != null && head2 != null) {
      if (head1.data != head2.data) {
        return 0;
      }
      c1++;
      c2++;
      head1 = head1.next;
      head2 = head2.next;
    }
    while (head1 != null) {
      c1++;
      head1 = head1.next;
    }
    while (head2 != null) {
      c2++;
      head2 = head2.next;
    }
    if (c1 == c2) {
      return 1;
    }
    return 0;
  },
};
