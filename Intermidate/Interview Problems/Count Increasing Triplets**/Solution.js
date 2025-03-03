module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ans = 0;
    for (let j = 1; j < A.length; j++) {
      let l = 0;
      let r = 0;
      for (let i = 0; i <= j - 1; i++) {
        if (A[i] < A[j]) {
          l++;
        }
      }
      for (let i = j + 1; i < A.length; i++) {
        if (A[j] < A[i]) {
          r++;
        }
      }
      ans += l * r;
    }
    return ans;
  },
};
