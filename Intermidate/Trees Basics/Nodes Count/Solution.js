// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  solve: function (A) {
    if (A == null) {
      return 0;
    }
    return 1 + this.solve(A.left) + this.solve(A.right);
  },
};
