module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let mc = -Infinity,
      c = 0,
      N = A.length;
    for (let i = 0; i < N; i++) {
      if (A[i] > mc) {
        mc = A[i];
        c = 1;
      } else if (A[i] == mc) {
        c++;
      }
    }
    return N - c;
  },
};


// step- 1 find the max ele
// step-2 count frq of max ele
// step ans= A-count(max)
// TC(N)
