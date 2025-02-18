module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    let arr = [];
    let n = A.length;
    let m = A[0].length;

    for (let j = 0; j < m; j++) {
      let a = [];
      for (let i = 0; i < n; i++) {
        a.push(A[i][j]);
      }
      arr.push(a);
    }
    return arr;
  },
};
