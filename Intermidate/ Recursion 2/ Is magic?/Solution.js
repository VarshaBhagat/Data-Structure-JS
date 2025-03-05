module.exports = {
  //param A : integer
  //return an integer
  sumDigit: function (A) {
    if (A == 0) {
      return 0;
    }
    return (A % 10) + this.sumDigit(Math.floor(A / 10));
  },
  solve: function (A) {
    while (A >= 10) {
      A = this.sumDigit(A);
    }
    return A == 1 ? 1 : 0;
  },
};
