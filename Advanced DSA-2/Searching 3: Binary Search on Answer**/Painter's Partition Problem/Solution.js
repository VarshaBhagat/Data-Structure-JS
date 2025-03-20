module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer
  check: function (arr, painter, m) {
    let worker = 1,
      s = 0;
    for (let i = 0; i < arr.length; i++) {
      if (s + arr[i] > m) {
        s = arr[i];
        worker++;
      } else {
        s += arr[i];
      }
    }
    if (worker > painter) {
      return false;
    }
    return true;
  },
  paint: function (A, B, C) {
    let low = 0,
      high = 0,
      ans = 1;
    for (let i = 0; i < C.length; i++) {
      low = Math.max(low, C[i]);
      high += C[i];
    }
    if (A >= C.length) {
      ans = low;
    } else {
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (this.check(C, A, mid)) {
          ans = mid;
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
    return (ans * B) % 10000003;
  },
};
