module.exports = {
  //param A : integer
  recur: function (A) {
    if (A == 0) {
      return;
    }
    process.stdout.write(A.toString() + " ");
    this.recur(A - 1);
  },
  solve: function (A) {
    this.recur(A);
    console.log();
  },
};
