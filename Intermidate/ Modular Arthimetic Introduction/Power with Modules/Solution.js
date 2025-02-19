module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let res = 1n;
    for (let i = 0; i < B; i++) {
      res = (res * BigInt(A)) % BigInt(C);
    }

    return Number(res);
  },
};
