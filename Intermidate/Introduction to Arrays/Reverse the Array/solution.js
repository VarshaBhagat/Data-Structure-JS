module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let i = 0,
      j = A.length - 1;
    while (i < j) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      i++;
      j--;
    }
    return A;
  },
};
