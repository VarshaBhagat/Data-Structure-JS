// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  solve: function (A) {
    let f = A;
    let s = A;
    while (f && f.next) {
      s = s.next;
      f = f.next.next;
      if (f == s) {
        break;
      }
    }
    f = A;
    while (s.next != f.next) {
      s = s.next;
      f = f.next;
    }
    s.next = null;
    return A;
  },
};
