module.exports = {
  //param A : array of integers
  //return a array of array of integers
  solve: function (A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      for (let j = i; j < A.length; j++) {
        let a = [];
        for (let k = i; k <= j; k++) {
          a.push(A[k]);
        }
        arr.push(a);
      }
    }

    return arr;
  },
};
