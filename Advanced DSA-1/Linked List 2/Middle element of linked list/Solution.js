// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  solve: function (A) {
    let f = A,
      s = A;
    while (f && f.next) {
      s = s.next;
      f = f.next.next;
    }
    return s.data;
  },
};
