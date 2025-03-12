// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return an integer
  reverseList: function (A) {
    let prev;
    let curr = A;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  },
  lPalin: function (A) {
    let count = 0;
    let temp = A;
    while (temp.next != null) {
      count++;
      temp = temp.next;
    }
    temp = A;
    for (let i = 0; i < Math.floor(count / 2); i++) {
      temp = temp.next;
    }
    let h1 = this.reverseList(temp.next);
    temp.next = null;
    while (h1 && A) {
      if (h1.data != A.data) {
        return 0;
      }
      A = A.next;
      h1 = h1.next;
    }
    return 1;
  },
};
