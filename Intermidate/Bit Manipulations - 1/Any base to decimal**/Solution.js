module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let s = 0,
      a = 0,
      i = 0;
    while (A > 0) {
      a = A % 10;
      s += a * Math.pow(B, i);
      i++;
      A = Math.floor(A / 10);
    }
    return s;
  },
};
