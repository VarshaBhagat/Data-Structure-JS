module.exports = {
  //param A : array of array of integers
  //return a array of integers
  solve: function (A) {
    let ans = [];
    let n = A.length;
    let m = A[0].length;
    let s = 0;
    for (let j = 0; j < m; j++) {
      s = 0;
      for (let i = 0; i < n; i++) {
        s += A[i][j];
      }
      ans.push(s);
    }
    return ans;
  },
};
