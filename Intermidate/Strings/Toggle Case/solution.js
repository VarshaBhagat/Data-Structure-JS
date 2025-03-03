module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    A = A.split("");
    for (let i = 0; i < A.length; i++) {
      A[i] = String.fromCharCode(A[i].charCodeAt(0) ^ (1 << 5));
    }
    return A.join("");
  },
};
