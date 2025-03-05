module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  A_th_Row: function (A) {
    if (A == 1) {
      return [0];
    }
    let v1 = this.A_th_Row(A - 1);
    let v2 = [];
    for (let i = 0; i < v1.length; i++) {
      if (v1[i] == 0) {
        v2.push(0);
        v2.push(1);
      } else {
        v2.push(1);
        v2.push(0);
      }
    }
    return v2;
  },
  solve: function (A, B) {
    return this.A_th_Row(A)[B];
  },
};
