module.exports = {
  //param A : array of integers
  //return a strings
  solve: function (A) {
    let n = A.length;
    if (A.length % 2 == 0 && A[0] % 2 == 0 && A[A.length - 1] % 2 == 0) {
      return "YES";
    }
    return "NO";
  },
};
