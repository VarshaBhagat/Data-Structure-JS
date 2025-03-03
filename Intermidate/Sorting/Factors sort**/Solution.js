module.exports = {
  //param A : array of integers
  //return a array of integers

  solve: function (A) {
    function factors(a) {
      let f = 0;
      for (let i = 1; i * i <= a; i++) {
        if (a % i == 0) {
          if (a / i == i) {
            f++;
          } else {
            f += 2;
          }
        }
      }
      return f;
    }
    let B = A.sort((a, b) => {
      let c = factors(a);
      let d = factors(b);
      if (c != d) {
        return c - d;
      }
      return a - b;
    });

    return A;
  },
};
