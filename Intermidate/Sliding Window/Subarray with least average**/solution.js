module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let s = 0;
    for (let i = 0; i < A.length; i++) {
      s += A[i];
    }
    let min = s;
    let index = 0;
    let L = 1,
      R = B;
    while (R < A.length) {
      s = s - A[L - 1] + A[R];

      if (s < min) {
        index = L;
        min = Math.min(min, s);
      }
      L++;
      R++;
    }
    return index;
  },
};
