// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  swapPairs: function (A) {
    let temp = A;
    while (temp != null && temp.next != null) {
      let currVal = temp.data;
      temp.data = temp.next.data;
      temp.next.data = currVal;
      temp = temp.next.next;
    }
    return A;
  },
};
