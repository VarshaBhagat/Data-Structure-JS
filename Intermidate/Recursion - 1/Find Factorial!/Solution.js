module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    if (A == 1) {
      return 1;
    }
    return A * this.solve(A - 1);
  },
};
