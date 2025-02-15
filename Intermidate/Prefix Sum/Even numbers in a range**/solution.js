module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    let ps = [];
    ps[0] = Number(A[0]) % 2 == 0 ? 1 : 0;
    for (let i = 1; i < A.length; i++) {
      if (Number(A[i]) % 2 == 0) {
        ps[i] = ps[i - 1] + 1;
      } else {
        ps[i] = ps[i - 1];
      }
    }
    let sol = [];
    for (let i = 0; i < B.length; i++) {
      let l = B[i][0];
      let r = B[i][1];
      if (l == 0) {
        sol.push(ps[r]);
      } else {
        sol.push(ps[r] - ps[l - 1]);
      }
    }
    return sol;
  },
};
