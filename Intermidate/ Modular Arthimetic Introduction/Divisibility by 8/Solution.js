module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let a = 0;
    let n = A.length;
    if (n == 1) {
      a = A[n - 1];
    } else if (n == 2) {
      a = A[n - 2] + A[n - 1];
    } else {
      a = A[n - 3] + A[n - 2] + A[n - 1];
    }
    return a % 8 == 0 ? 1 : 0;
  },
};
