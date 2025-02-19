module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let s = 0n;
    for (let i = 0; i < A.length; i++) {
      s += A[i];
    }
    return Number(s) % 3 == 0 ? 1 : 0;
  },
};
