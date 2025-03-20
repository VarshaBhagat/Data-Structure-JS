module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  isMidPossible: function (A, B, mid) {
    let count = 1;
    let lastIndex = 0;
    for (let i = 1; i < A.length; i++) {
      if (A[i] - A[lastIndex] >= mid) {
        lastIndex = i;
        count++;
        if (count == B) {
          return true;
        }
      }
    }
    return false;
  },

  solve: function (A, B) {
    A.sort((a, b) => {
      return a - b;
    });
    let low = 1;
    let high = A[A.length - 1] - A[0];
    let ans = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (this.isMidPossible(A, B, mid)) {
        ans = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return ans;
  },
};
