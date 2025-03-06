// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers

  inorderTraversal: function (A) {
    let a = [];
    function inOrder(A) {
      if (A == null) {
        return;
      }
      inOrder(A.left);
      a.push(A.data);
      inOrder(A.right);
    }
    inOrder(A);
    return a;
  },
};
