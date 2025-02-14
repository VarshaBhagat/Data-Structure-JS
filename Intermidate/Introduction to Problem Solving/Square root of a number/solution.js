module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    for (let i = 1; i * i <= A; i++) {
      if (i * i == A) {
        return i;
      }
    }
    return -1;
  },
};
