module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer
  solve: function (A, B, C) {
    let arr = [];
    for (let i = 0; i < A; i++) {
      if (C[i] == 0) {
        arr.pop();
      } else {
        arr.push(C[i]);
      }
    }
    return arr.length == 0 ? B : arr[arr.length - 1];
  },
};
