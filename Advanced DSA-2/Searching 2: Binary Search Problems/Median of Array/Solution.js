module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  findMedianSortedArrays: function (A, B) {
    if (A.length > B.length) return this.findMedianSortedArrays(B, A); // Ensure A is smaller

    let x = A.length,
      y = B.length;
    let low = 0,
      high = x;

    while (low <= high) {
      let i1 = Math.floor((low + high) / 2);
      let i2 = Math.floor((x + y + 1) / 2) - i1;
      let maxA = i1 === 0 ? -Infinity : A[i1 - 1];
      let minA = i1 === x ? Infinity : A[i1];
      let maxB = i2 === 0 ? -Infinity : B[i2 - 1];
      let minB = i2 === y ? Infinity : B[i2];

      if (maxA <= minB && maxB <= minA) {
        if ((x + y) % 2) return Math.max(maxA, maxB).toFixed(1);
        else
          return ((Math.max(maxA, maxB) + Math.min(minA, minB)) / 2).toFixed(1);
      } else if (maxA > minB) {
        high = i1 - 1;
      } else {
        low = i1 + 1;
      }
    }
  },
};
