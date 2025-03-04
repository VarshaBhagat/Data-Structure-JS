module.exports = {
  //param A : string
  //return an integer
  recur: function (A, st, et) {
    if (st > et) {
      return 1;
    } else if (A[st] != A[et]) {
      return 0;
    }
    return this.recur(A, st + 1, et - 1);
  },
  solve: function (A) {
    let st = 0,
      et = A.length - 1;
    return this.recur(A, st, et);
  },
};
