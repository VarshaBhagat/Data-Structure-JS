module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let max = -Infinity,
      min = Infinity;
    for (let i = 0; i < A.length; i++) {
      if (max < A[i]) {
        max = A[i];
      }
      if (min > A[i]) {
        min = A[i];
      }
    }
    if (min == max) {
      return 1;
    }
    let minIndex = -1,
      maxIndex = -1,
      c = A.length;
    for (let i = 0; i < A.length; i++) {
      if (A[i] == min) {
        minIndex = i;
      }
      if (A[i] == max) {
        maxIndex = i;
      }
      if (minIndex != -1 && maxIndex != -1) {
        c = Math.min(c, Math.abs(minIndex - maxIndex) + 1);
      }
    }
    return c;
  },
};
