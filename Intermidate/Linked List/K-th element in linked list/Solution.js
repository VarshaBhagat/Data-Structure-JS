// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let head = A;
    while (B > 0) {
      head = head.next;
      B--;
    }
    return head.data;
  },
};
