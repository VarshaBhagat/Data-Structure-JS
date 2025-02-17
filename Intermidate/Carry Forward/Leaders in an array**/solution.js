module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    let n = A.length;
    let mc = -Infinity;
    let arr = [];
    for (let i = n - 1; i >= 0; i--) {
      if (A[i] > mc) {
        mc = A[i];
        arr.push(mc);
      }
    }
    return arr;
  },
};
