module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let m = new Map();
    for (let i = 0; i < A.length; i++) {
      m.set(A[i], m.get(A[i]) + 1 || 1);
    }
    for (let [key, value] of m) {
      if (value > 1) {
        return key;
      }
    }
    return -1;
  },
};
