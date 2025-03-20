module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ele = A[0];
    for (let i = 1; i < A.length; i++) {
      if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
        ele = A[i];
      } else if (i == A.length - 1 && A[i] >= A[i - 1]) {
        ele = A[i];
      }
    }
    return ele;
  },
};
