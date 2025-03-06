// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return a array of integers
  postorderTraversal: function (A) {
    let a = [];
    function postOrder(A) {
      if (A == null) {
        return;
      }
      postOrder(A.left);
      postOrder(A.right);
      a.push(A.data);
    }
    postOrder(A);
    return a;
  },
};
