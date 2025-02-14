module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    if (A.length == 1) {
      return -1;
    }
    let max = -1,
      smax = -1;
    for (let i = 0; i < A.length; i++) {
      if (A[i] > max) {
        max = A[i];
      }
    }
    for (let i = 0; i < A.length; i++) {
      if (A[i] > smax && A[i] < max) {
        smax = A[i];
      }
    }
    return Number(smax);
  },
};
