module.exports = {
  //param A : string
  //return an integer
  lsp: function (A, l, r) {
    if (r <= l) {
      return 1;
    }
    if (A[l] != A[r]) {
      return 0;
    }
    return this.lsp(A, l + 1, r - 1);
  },
  solve: function (A) {
    let l = 0,
      r = A.length - 1;
    return this.lsp(A, l, r);
  },
};
