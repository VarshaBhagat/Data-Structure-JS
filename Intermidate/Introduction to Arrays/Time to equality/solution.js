module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let m = -Infinity;
    for (let i = 0; i < A.length; i++) {
      if (m < A[i]) {
        m = A[i];
      }
    }
    let c = 0;
    for (let i = 0; i < A.length; i++) {
      c += m - A[i];
    }
    return c;
  },
};
