module.exports = {
  //param A : array of integers
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
  solve: function (A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      arr.push(this.divisor(A[i]));
    }
    return arr;
  },
};
