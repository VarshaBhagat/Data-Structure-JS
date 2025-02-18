module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let s = 0;
    for (let i = 0; i < A.length; i++) {
      s += A[A.length - 1 - i][i];
    }
    return s;
  },
};
