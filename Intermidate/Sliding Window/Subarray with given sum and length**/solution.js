module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let s = 0n;
    for (let i = 0; i < B; i++) {
      s += BigInt(A[i]);
    }
    if (s == C) {
      return 1;
    }

    let L = 1,
      R = B;
    while (R < A.length) {
      s = s - BigInt(A[L - 1]) + BigInt(A[R]);

      if (s == C) {
        return 1;
      }
      L++;
      R++;
    }
    return 0;
  },
};
