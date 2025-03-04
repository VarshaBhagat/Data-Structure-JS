module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    let arr = new Array(A).fill(0);
    for (let i = 0; i < B.length; i++) {
      let x = B[i][0] - 1;
      let y = B[i][1] - 1;
      let val = B[i][2];
      arr[x] += val;
      if (y + 1 < A) {
        arr[y + 1] -= val;
      }
    }
    for (let i = 1; i < arr.length; i++) {
      arr[i] += arr[i - 1];
    }
    return arr;
  },
};
