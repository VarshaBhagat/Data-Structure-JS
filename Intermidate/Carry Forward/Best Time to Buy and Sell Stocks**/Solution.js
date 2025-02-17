module.exports = {
  //param A : array of integers
  //return an integer
  maxProfit: function (A) {
    if (A.length == 0) {
      return 0;
    }
    let max = A[A.length - 1];
    let p = 0;
    for (let i = A.length - 2; i >= 0; i--) {
      if (A[i] > max) {
        max = A[i];
      }
      p = Math.max(p, max - A[i]);
    }
    return p;
  },
};
