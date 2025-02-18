module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    let m = A.length;
    let n = A[0].length;
    for (let i = 0; i < m; i++) {
      let isZero = false;
      for (let j = 0; j < n; j++) {
        if (A[i][j] == 0) {
          isZero = true;
        }
      }
      if (isZero) {
        for (let j = 0; j < n; j++) {
          if (isZero && A[i][j] != 0) {
            A[i][j] = -1;
          }
        }
      }
    }
    for (let i = 0; i < n; i++) {
      let isZero = false;
      for (let j = 0; j < m; j++) {
        if (A[j][i] == 0) {
          isZero = true;
        }
      }
      if (isZero) {
        for (let j = 0; j < m; j++) {
          if (isZero && A[j][i] != 0) {
            A[j][i] = -1;
          }
        }
      }
    }

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (A[i][j] == -1) {
          A[i][j] = 0;
        }
      }
    }
    return A;
  },
};
