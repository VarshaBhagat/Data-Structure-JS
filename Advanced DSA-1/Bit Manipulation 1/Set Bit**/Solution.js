module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let ans = 0;
    ans = ans | (1 << A);
    ans = ans | (1 << B);
    return ans;
  },
};
