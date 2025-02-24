module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    return (1 << A) | (1 << B);
  },
};
