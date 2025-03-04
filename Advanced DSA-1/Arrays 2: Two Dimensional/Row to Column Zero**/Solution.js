module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    for (let i = 0; i < A.length; i++) {
      let f = 0;
      for (j = 0; j < A[0].length; j++) {
        if (A[i][j] == 0) {
          f = 1;
          break;
        }
      }

      for (j = 0; j < A[0].length; j++) {
        if (f == 1) {
          if (A[i][j] != 0) {
            A[i][j] = 0;
          } else {
            A[i][j] = -1;
          }
        }
      }
    }

    for (let j = 0; j < A[0].length; j++) {
      let f = 0;
      for (i = 0; i < A.length; i++) {
        if (A[i][j] == -1) {
          f = 1;
          break;
        }
      }
      for (i = 0; i < A.length; i++) {
        if (f == 1) {
          A[i][j] = 0;
        }
      }
    }

    return A;
  },
};
