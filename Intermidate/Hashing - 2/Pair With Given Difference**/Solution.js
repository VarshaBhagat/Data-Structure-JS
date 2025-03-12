module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let m = new Set();
    for (let i = 0; i < A.length; i++) {
      let diff = A[i] + B;
      let diff1 = A[i] - B;
      if (m.has(diff1) || m.has(diff)) {
        return 1;
      }
      m.add(A[i]);
    }
    return 0;
  },
};
