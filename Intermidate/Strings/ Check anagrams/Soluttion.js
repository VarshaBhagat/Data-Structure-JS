module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    let s = new Map();
    let a = new Array(26).fill(0);
    for (let i = 0; i < A.length; i++) {
      let id = A[i].charCodeAt(0) - "a".charCodeAt(0);
      a[id]++;
    }
    for (let i = 0; i < B.length; i++) {
      let id = B[i].charCodeAt(0) - "a".charCodeAt(0);
      a[id]--;
    }
    return Number(a.join("")) == 0 ? 1 : 0;
  },
};
