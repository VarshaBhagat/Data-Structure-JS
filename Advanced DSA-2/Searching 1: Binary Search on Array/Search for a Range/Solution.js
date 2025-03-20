module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  searchRange: function (A, B) {
    let low = 0,
      high = A.length - 1;
    let retArr = [-1, -1];
    while (low <= high) {
      let m = low + Math.floor((high - low) / 2);
      if (A[m] == B) {
        let mid = m;
        while (A[mid] == B) {
          retArr[0] = mid;
          mid--;
        }
        mid = m;
        while (A[mid] == B) {
          retArr[1] = mid;
          mid++;
        }
        return retArr;
      } else if (A[m] < B) {
        low = m + 1;
      } else {
        high = m - 1;
      }
    }
    return retArr;
  },
};
