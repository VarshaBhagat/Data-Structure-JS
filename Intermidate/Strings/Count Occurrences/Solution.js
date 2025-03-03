module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let c = 0;
    for (let i = 1; i < A.length - 1; i++) {
      if (A[i] == "o" && A[i - 1] == "b" && A[i + 1] == "b") {
        c++;
      }
    }
    return c;
  },
};
