module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    let row = A.length;
    let col = A[0].length;
    let i = 0,
      j = col - 1;
    while (i < row && j >= 0) {
      while (j >= 0 && A[i][j] != 0) {
        j--;
        ans = i;
      }
      i++;
    }
    return ans;
  },
};
