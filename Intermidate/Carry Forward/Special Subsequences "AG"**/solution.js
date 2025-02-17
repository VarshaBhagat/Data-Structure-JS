module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let ans = 0,
      c = 0;
    for (let i = A.length - 1; i >= 0; i--) {
      if (A[i] == "G") {
        c++;
      } else if (A[i] == "A") {
        ans += c;
      }
    }
    return ans % (Math.pow(10, 9) + 7);
  },
};
