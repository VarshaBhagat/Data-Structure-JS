module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    return A.sort((a, b) => {
      let c = (a / 10n) % 10n;
      let d = (b / 10n) % 10n;
      if (c == d) {
        return Number(b - a);
      }
      return Number(c - d);
    });
  },
};
