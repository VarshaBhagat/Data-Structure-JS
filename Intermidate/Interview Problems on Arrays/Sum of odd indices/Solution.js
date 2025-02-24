module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    let PS = [];
    PS[0] = 0;
    for (let i = 1; i < A.length; i++) {
      if (i % 2 != 0) {
        PS[i] = Number(A[i]) + PS[i - 1];
      } else {
        PS[i] = PS[i - 1];
      }
    }
    let arr = [];
    for (let i = 0; i < B.length; i++) {
      let L = B[i][0];
      let R = B[i][1];
      if (L == 0) {
        arr.push(PS[R]);
      } else {
        arr.push(PS[R] - PS[L - 1]);
      }
    }
    return arr;
  },
};
