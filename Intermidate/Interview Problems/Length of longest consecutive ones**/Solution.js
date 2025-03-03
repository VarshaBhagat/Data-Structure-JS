module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let ans = 0,
      c = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 1) {
        c++;
      }
    }
    if (c == A.length) return c;
    if (c == 0) return 0;
    let leftIndex;
    for (let i = 0; i < A.length; i++) {
      if (A[i] == 0) {
        let l = 0,
          r = 0;
        for (let j = i - 1; j >= 0; j--) {
          if (A[j] == 1) {
            l++;
          } else {
            break;
          }
        }
        for (let j = i + 1; j < A.length; j++) {
          if (A[j] == 1) {
            r++;
          } else {
            break;
          }
        }
        if (c == l + r) {
          ans = Math.max(ans, l + r);
        } else {
          ans = Math.max(ans, l + r + 1);
        }
      }
    }
    return ans;
  },
};
