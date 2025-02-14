module.exports = {
  //param A : array of integers
  //param B : integer
  //param C : integer
  //return a array of integers
  solve: function (A, B, C) {
    let st = B,
      et = C;
    while (st < et) {
      let temp = A[st];
      A[st] = A[et];
      A[et] = temp;
      st++;
      et--;
    }
    return A;
  },
};
