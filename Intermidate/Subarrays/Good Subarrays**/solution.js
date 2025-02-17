module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let c = 0,
      l;
    for (let i = 0; i < A.length; i++) {
      s = 0;
      for (let j = i; j < A.length; j++) {
        l = i - j + 1;
        s += Number(A[j]);
        if (l % 2 == 0 && s < B) {
          c++;
        } else if (l % 2 != 0 && s > B) {
          c++;
        }
      }
    }
    return c;
  },
};
