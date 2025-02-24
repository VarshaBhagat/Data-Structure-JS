module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let c = 0;
    while (A > 0) {
      if (A & 1) {
        c++;
      }
      A = A >> 1;
    }
    return c;
  },
};
