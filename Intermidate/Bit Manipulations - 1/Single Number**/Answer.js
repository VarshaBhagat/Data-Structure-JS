module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let s = 0;
    for (let i = 0; i < A.length; i++) {
      s = s ^ Number(A[i]);
    }
    return s;
  },
};
