module.exports = {
  //param A : array of integers
  //param B : integer
  //return a array of integers
  dNums: function (A, B) {
    let m = new Map();
    for (let i = 0; i < B; i++) {
      m.set(A[i], m.get(A[i]) + 1 || 1);
    }
    let arr = [];
    arr.push(m.size);
    let L = 1,
      R = B;
    while (R < A.length) {
      if (m.has(A[L - 1])) {
        m.set(A[L - 1], m.get(A[L - 1]) - 1);
        if (m.get(A[L - 1]) == 0) {
          m.delete(A[L - 1]);
        }
      }
      m.set(A[R], m.get(A[R]) + 1 || 1);
      arr.push(m.size);
      L++;
      R++;
    }
    return arr;
  },
};
