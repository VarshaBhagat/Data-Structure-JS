module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let window = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= B) {
        window++;
      }
    }
    let count = 0;
    for (let i = 0; i < window; i++) {
      if (A[i] > B) {
        count++;
      }
    }
    let L = 1,
      R = window,
      ans = count;
    while (R < A.length) {
      if (A[L - 1] > B) {
        count--;
      }
      if (A[R] > B) {
        count++;
      }
      R++;
      L++;
      ans = Math.min(ans, count);
    }
    return ans;
  },
};
