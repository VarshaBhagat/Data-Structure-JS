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
    while (head != null) {
      if (head.data == B) {
        return 1;
      }
      head = head.next;
    }
    return 0;
  },
};
