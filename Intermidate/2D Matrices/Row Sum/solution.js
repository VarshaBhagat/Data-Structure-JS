module.exports = {
  //param A : array of array of integers
  //return a array of integers
  solve: function (A) {
    let n = A.length;
    let m = A[0].length;
    let sol = [];
    for (let i = 0; i < n; i++) {
      let s = 0;
      for (let j = 0; j < m; j++) {
        s += A[i][j];
      }
      sol.push(s);
    }
    return sol;
  },
};
