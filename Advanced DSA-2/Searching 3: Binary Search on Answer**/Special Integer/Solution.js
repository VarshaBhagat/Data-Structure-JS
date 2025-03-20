module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  isValid: function (A, B, mid) {
    let windowSum = 0;

    // Compute sum of first K elements
    for (let i = 0; i < mid; i++) {
      windowSum += A[i];
    }
    if (windowSum > B) return false;

    for (let i = mid; i < A.length; i++) {
      windowSum += A[i] - A[i - mid];
      if (windowSum > B) return false;
    }
    return true;
  },
  solve: function (A, B) {
    let low = 1,
      high = A.length,
      ans = 0;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (this.isValid(A, B, mid)) {
        ans = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return ans;
  },
};
