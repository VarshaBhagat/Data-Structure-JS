module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    A = A.split("");
    let i = 0,
      j = A.length - 1;
    while (i < j) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      i++;
      j--;
    }
    return A.join("");
  },
};
