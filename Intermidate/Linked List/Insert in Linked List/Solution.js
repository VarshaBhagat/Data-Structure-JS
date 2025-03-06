// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //param C : integer
  //return the head node in the linked list
  solve: function (A, B, C) {
    let head = A;
    let node = new Node(B);
    if (head == null) {
      head = node;
      return head;
    }
    if (C == 0) {
      let tempNode = head;
      head = node;
      head.next = tempNode;
      return head;
    } else {
      let index = 1;

      while (head) {
        if (index == C) {
          let temp = head.next;
          head.next = node;
          node.next = temp;
        }
        if (head.next == null && C > index) {
          head.next = node;
          node.next = null;
        }
        index++;
        head = head.next;
      }
    }
    return A;
  },
};
