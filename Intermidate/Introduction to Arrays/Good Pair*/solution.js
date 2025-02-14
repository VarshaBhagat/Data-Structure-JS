module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < A.length; j++) {
        if (i != j && A[i] + A[j] == B) {
          return 1;
        }
      }
    }
    return 0;
  },
};
