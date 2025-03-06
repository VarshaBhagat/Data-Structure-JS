// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  solve: function (A) {
    let head = A;
    let out = "";
    while (head != null) {
      out += head.data + " ";
      head = head.next;
    }
    console.log(out);
  },
};
