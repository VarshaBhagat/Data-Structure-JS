module.exports = {
  //param A : integer
  //return a array of array of integers
  generateMatrix: function (A) {
    let arr = [];
    for (let i = 0; i < A; i++) {
      arr.push([]);
    }
    let i = 0,
      val = 1,
      j = 0;

    while (A > 1) {
      for (k = 1; k < A; k++) {
        arr[i][j] = val++;
        j++;
      }
      for (k = 1; k < A; k++) {
        arr[i][j] = val++;
        i++;
      }
      for (k = 1; k < A; k++) {
        arr[i][j] = val++;
        j--;
      }
      for (k = 1; k < A; k++) {
        arr[i][j] = val++;
        i--;
      }
      A = A - 2;
      i++;
      j++;
    }
    if (A == 1) {
      arr[i][j] = val++;
    }

    return arr;
  },
};
