module.exports = {
  //param A : array of array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let i = 0,
      j = A[0].length - 1,
      n = A.length,
      iIndex = -1,
      jIndex = -1;
    while (i < n && j >= 0) {
      if (A[i][j] == B) {
        iIndex = i + 1;
        let k = j;
        while (k >= 0 && A[i][k] == B) {
          jIndex = k + 1;
          k--;
        }
        break;
      } else if (B < A[i][j]) {
        j--;
      } else {
        i++;
      }
    }
    if (iIndex != -1) {
      return iIndex * 1009 + jIndex;
    }
    return -1;
  },
};
