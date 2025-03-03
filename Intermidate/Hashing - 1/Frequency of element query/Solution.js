module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let m = new Map();
    for (let i = 0; i < A.length; i++) {
      if (m.has(A[i])) {
        m.set(A[i], m.get(A[i]) + 1);
      } else {
        m.set(A[i], 1);
      }
    }

    let ans = [];
    for (let i = 0; i < B.length; i++) {
      if (m.has(B[i])) {
        ans.push(m.get(B[i]));
      } else {
        ans.push(0);
      }
    }
    return ans;
  },
};
