module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    let PE = [];
    PE.push(A[0]);
    for (let i = 1; i < A.length; i++) {
      if (i % 2 == 0) {
        PE.push(PE[i - 1] + A[i]);
      } else {
        PE.push(PE[i - 1]);
      }
    }
    let ans = [];
    for (let i = 0; i < B.length; i++) {
      let L = B[i][0];
      let R = B[i][1];
      if (L == 0) {
        ans.push(PE[R]);
      } else {
        ans.push(PE[R] - PE[L - 1]);
      }
    }
    return ans;
  },
};
