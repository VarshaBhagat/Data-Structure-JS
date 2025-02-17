module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    // a, e, i, o, u, A, E, I, O, U
    let s = 0;
    for (i = 0; i < A.length; i++) {
      if (
        A[i] == "a" ||
        A[i] == "e" ||
        A[i] == "i" ||
        A[i] == "o" ||
        A[i] == "u" ||
        A[i] == "A" ||
        A[i] == "E" ||
        A[i] == "I" ||
        A[i] == "O" ||
        A[i] == "U"
      ) {
        // [L, R]=>R-L+1
        s += A.length - 1 - i + 1;
      }
    }
    return s % 10003;
  },
};
