module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let ele = A[0];
    for (let i = 1; i < A.length; i++) {
      ele = ele ^ A[i];
    }
    return ele;
  },
};
