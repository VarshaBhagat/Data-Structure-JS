module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of array of integers
  //return an integer
  findDiff: function (arr1, arr2) {
    let min = Infinity;
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        min = Math.min(min, Math.abs(arr1[i] - arr2[j]));
      }
    }
    return min;
  },
  solve: function (A, B, C) {
    let min = Infinity;
    for (let i = 0; i < B - 1; i++) {
      let arr1 = C[i];
      let arr2 = C[i + 1];
      let m = this.findDiff(arr1, arr2);
      min = Math.min(m, min);
    }
    return min;
  },
};
