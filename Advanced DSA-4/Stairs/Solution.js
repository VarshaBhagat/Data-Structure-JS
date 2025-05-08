module.exports = {
  //param A : integer
  //return an integer
  climbStairs: function (A) {
    function fib(n) {
      let dp = [];
      if (n <= 3) {
        return n;
      }
      if (dp[n]) {
        return dp[n];
      }
      dp[n] = fib(n - 1) + fib(n - 2);
      return dp[n];
    }
    return fib(A);
  },
};
