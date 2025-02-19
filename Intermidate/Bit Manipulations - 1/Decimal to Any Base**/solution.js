module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  DecimalToAnyBase: function (A, B) {
    let s = "";
    while (A > 1) {
      let c = A % B;
      s = c + s;
      A = Math.floor(A / B);
    }
    return Number(A + s);
  },
};
