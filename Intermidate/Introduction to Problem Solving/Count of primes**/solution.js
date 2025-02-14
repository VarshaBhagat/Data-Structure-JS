module.exports = {
  //param A : integer
  //return an integer
  factorCount: function (A) {
    let fact = 0;
    for (let i = 1; i * i <= A; i++) {
      if (A % i == 0) {
        if (i == A / i) {
          fact++;
        } else {
          fact += 2;
        }
      }
    }
    return fact;
  },
  isPrime: function (A) {
    if (A == 1) {
      return false;
    }
    if (this.factorCount(A) == 2) {
      return true;
    }

    return false;
  },
  solve: function (A) {
    let c = 0;
    for (let i = 1; i <= A; i++) {
      if (this.isPrime(i)) {
        c++;
      }
    }
    return c;
  },
};
