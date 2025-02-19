module.exports = {
  //param A : array of integers
  //return a strings
  solve: function (A) {
    let c = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] & 1) {
        c++;
      }
    }
    if (c & 1) {
      return "No";
    }
    return "Yes";
  },
};
