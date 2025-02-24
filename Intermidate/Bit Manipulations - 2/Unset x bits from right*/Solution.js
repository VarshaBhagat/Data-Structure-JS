module.exports = {
  //param A : long
  //param B : integer
  //return a long integers
  solve: function (A, B) {
    A = Number(A);
    B = Number(B);
    for (let i = 0; i < B; i++) {
      if (A & (1 << i)) {
        A -= 1 << i;
      }
    }
    return A;
  },
};
