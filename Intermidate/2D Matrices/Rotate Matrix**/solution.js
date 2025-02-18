module.exports = {
  //param A : array of array of integers
  //return nothing
  solve: function (A) {
    let N = A.length;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < i; j++) {
        let t = A[i][j];
        A[i][j] = A[j][i];
        A[j][i] = t;
      }
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < Math.floor(N / 2); j++) {
        let t = A[i][j];
        A[i][j] = A[i][N - 1 - j];
        A[i][N - 1 - j] = t;
      }
    }
    return A;
  },
};

//
// 00 01 02
// 10 11 12
// 3-1-1

// 1 3
// 2 4

// 3,1
//1,
//2
