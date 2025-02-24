module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let c = 1;
    let n = 0;
    while (A > 0) {
      if (A & 1) {
        n += Math.pow(5, c);
      }
      A = A >> 1;
      c++;
    }

    return n;
  },
};
// 1010
// 25+625
