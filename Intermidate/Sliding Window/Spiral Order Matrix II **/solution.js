module.exports = {
  //param A : integer
  //return a array of array of integers
  generateMatrix: function (A) {
    let arr = [];

    for (let i = 0; i < A; i++) {
      let a = new Array(A).fill(0);
      arr.push(a);
    }

    let i = 0,
      j = 0,
      c = 1;
    while (A > 1) {
      for (let k = 0; k < A - 1; k++) {
        arr[i][j] = c;
        c++;
        j++;
      }

      for (let k = 0; k < A - 1; k++) {
        arr[i][j] = c;
        c++;
        i++;
      }

      for (let k = 0; k < A - 1; k++) {
        arr[i][j] = c;
        c++;
        j--;
      }

      for (let k = 0; k < A - 1; k++) {
        arr[i][j] = c;
        c++;
        i--;
      }

      A = A - 2;
      i++;

      j++;
    }
    if (A == 1) {
      arr[i][j] = c;
    }

    return arr;
  },
};
