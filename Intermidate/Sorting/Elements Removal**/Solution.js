module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    A = A.sort((a, b) => b - a);
    let c = 1,
      ans = 0;
    for (let i = 0; i < A.length; i++) {
      ans += A[i] * c;
      c++;
    }
    return ans;
  },
};
