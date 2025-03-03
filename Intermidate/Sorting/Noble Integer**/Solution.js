module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let c = 0;
    A = A.sort((a, b) => b - a);
    if (A[0] == 0) {
      return 1;
    }
    for (let i = 1; i < A.length; i++) {
      if (A[i] != A[i - 1]) {
        c = i;
      }
      if (A[i] == c) {
        return 1;
      }
    }
    return -1;
  },
};
