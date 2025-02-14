module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  reverse: function (A, st, et) {
    let i = st,
      j = et;
    while (i < j) {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      i++;
      j--;
    }
    return A;
  },
  solve: function (A, B) {
    B = B % A.length; // it will handle if B is greater
    A = this.reverse(A, 0, A.length - 1); // reverse whole array
    A = this.reverse(A, 0, B - 1); // reverse 0 - B-1
    A = this.reverse(A, B, A.length - 1); // reverse from B to last ele
    return A;
  },
};


