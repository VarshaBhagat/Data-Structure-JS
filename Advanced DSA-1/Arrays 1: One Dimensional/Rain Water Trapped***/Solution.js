module.exports = {
  //param A : array of integers
  //return an integer
  trap: function (A) {
    let pMax = [];
    let sMax = [];
    let res = 0;
    pMax.push(A[0]);
    for (let i = 1; i < A.length; i++) {
      pMax.push(Math.max(pMax[i - 1], A[i]));
    }
    sMax[A.length - 1] = A[A.length - 1];
    for (let i = A.length - 2; i >= 0; i--) {
      sMax[i] = Math.max(sMax[i + 1], A[i]);
    }
    for (let i = 1; i < A.length - 1; i++) {
      let wL = Math.min(pMax[i - 1], sMax[i + 1]);
      let rem = Math.max(0, wL - A[i]);
      res += rem;
    }
    return res;
  },
};
