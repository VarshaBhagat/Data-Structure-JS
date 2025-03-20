module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  searchMatrix: function (A, B) {
    let n = A.length;
    let m = A[0].length;
    let i = 0,
      j = m - 1;
    while (i < n && j >= 0) {
      if (A[i][j] == B) {
        return 1;
      } else if (A[i][j] > B) {
        j--;
      } else {
        i++;
      }
    }
    return 0;
  },
};
