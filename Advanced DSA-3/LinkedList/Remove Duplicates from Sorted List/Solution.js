// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  deleteDuplicates: function (A) {
    let curr = A;
    while (curr != null) {
      if (curr.next != null && curr.data == curr.next.data) {
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }
    return A;
  },
};
