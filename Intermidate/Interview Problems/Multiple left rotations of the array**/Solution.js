module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of array of integers
  solve: function (A, B) {
    let m = B.length;
    let res = [];

    let n = A.length;
    for (let i = 0; i < B.length; i++) {
      let index = B[i] % n;
      let temp = [];
      for (j = index; j < A.length; j++) {
        temp.push(A[j]);
      }
      for (j = 0; j < index; j++) {
        temp.push(A[j]);
      }
      res.push(temp);
    }
    return res;
  },
};

// 5, 4, 3, 2, 1
// 3,4,5,1,2

// 5,4,3,2,1
// 4,5,1,2,3
