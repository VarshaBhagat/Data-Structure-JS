module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let s = new Set();
    for (let i = 0; i < A.length; i++) {
      s.add(A[i]);
    }
    return s.size;
  },
};
