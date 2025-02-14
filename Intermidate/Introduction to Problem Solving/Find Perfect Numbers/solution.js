module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    if (A == 1) {
      return 0;
    }

    let s = 1;
    for (let i = 2; i * i < A; i++) {
      if (A % i == 0) {
        s += i;
        if (i != A / i) {
          s += A / i;
        }
      }
    }
    if (s == A) {
      return 1;
    }
    return 0;
  },
};
