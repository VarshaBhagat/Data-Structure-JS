module.exports = {
  //param A : integer
  //return a array of integers
  divisor: function (A) {
    let c = 0;
    for (let i = 1; i * i <= A; i++) {
      if (A % i == 0) {
        if (i == A / i) {
          c++;
        } else {
          c += 2;
        }
      }
    }
    return c;
  },
  isPrime: function (A) {
    if (A == 1) {
      return false;
    }
    let count = this.divisor(A);
    if (count == 2) {
      return true;
    } else {
      return false;
    }
  },
  solve: function (A) {
    let arr = [];
    for (let i = 1; i <= A; i++) {
      if (this.isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;
  },
};
