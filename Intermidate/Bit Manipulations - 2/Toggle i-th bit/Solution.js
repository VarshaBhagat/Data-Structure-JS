module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    return A ^ (1 << B);
  },
};
