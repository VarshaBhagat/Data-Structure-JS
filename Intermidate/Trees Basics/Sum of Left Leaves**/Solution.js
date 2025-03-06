// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  isLeaf: function (A) {
    if (A == null) {
      return false;
    }
    if (A.left == null && A.right == null) {
      return true;
    }
    return false;
  },
  solve: function (A) {
    if (A == null) {
      return 0;
    }
    let ans = 0;
    if (this.isLeaf(A.left)) {
      ans += A.left.data;
    }
    ans += this.solve(A.left);
    ans += this.solve(A.right);
    return ans;
  },
};
