module.exports = {
  //param A : array of integers
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    let ans = [];
    for (let i = 0; i < B.length; i++) {
      let st = B[i][0];
      let et = B[i][1];
      let s = 0;
      for (let j = st; j <= et; j++) {
        s += Number(A[j]);
      }
      ans.push(s);
    }
    return ans;
  },
};
