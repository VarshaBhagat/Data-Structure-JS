module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let R = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= B) {
        R++;
      }
    }
    let min = 0;
    for (let i = 0; i < R; i++) {
      if (A[i] > B) {
        min++;
      }
    }
    let L = 1,
      ans = min;
    while (R < A.length) {
      if (A[L - 1] > B) {
        min--;
      }
      if (A[R] > B) {
        min++;
      }
      ans = Math.min(ans, min);
      L++;
      R++;
    }
    return ans;
  },
};
