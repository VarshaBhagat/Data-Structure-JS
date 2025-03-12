// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return the head node in the linked list
  removeNthFromEnd: function (A, B) {
    let count = 0;
    let temp = A;

    while (temp.next != null) {
      count++;
      temp = temp.next;
    }
    if (B == 1 && count == null) {
      return null;
    }
    if (B > count) {
      A = A.next;
    } else {
      count = count - B;
      temp = A;
      while (count > 0) {
        temp = temp.next;
        count--;
      }
      if (temp.next && temp.next.next) {
        temp.next = temp.next.next;
      } else {
        temp.next = null;
      }
    }
    return A;
  },
};
