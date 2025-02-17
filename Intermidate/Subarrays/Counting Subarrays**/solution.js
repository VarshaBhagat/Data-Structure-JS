module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let s = 0,
      c = 0;

    for (let i = 0; i < A.length; i++) {
      s = 0;
      for (let j = i; j < A.length; j++) {
        s += Number(A[j]);
        if (s < B) {
          c++;
        } else {
          break;
        }
      }
    }
    return c;
  },
};
