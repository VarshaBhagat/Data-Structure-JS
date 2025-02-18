module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum += A[i][i];
    }
    return sum;
  },
};
