module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    if ((A & (1 << B)) > 0) {
      return 1;
    }
    return 0;
  },
};
