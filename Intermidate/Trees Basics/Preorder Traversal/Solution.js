// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  preorderTraversal: function (A) {
    let a = [];
    function pre(A) {
      if (A == null) {
        return;
      }
      a.push(A.data);
      pre(A.left);
      pre(A.right);
    }
    pre(A);
    return a;
  },
};
