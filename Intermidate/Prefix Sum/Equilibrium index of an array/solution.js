module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ps = [];
    ps[0] = Number(A[0]);
    for (let i = 1; i < A.length; i++) {
      ps[i] = ps[i - 1] + Number(A[i]);
    }
    let index = -1;
    for (let i = 0; i < A.length; i++) {
      let l = i == 0 ? 0 : ps[i - 1];
      let r = ps[A.length - 1] - ps[i];
      if (l == r) {
        index = i;
      }
    }
    return index;
  },
};
