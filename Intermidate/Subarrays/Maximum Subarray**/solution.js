module.exports = {
  //param A : integer
  //param B : integer
  //param C : array of integers
  //return an integer

  maxSubarray: function (A, B, C) {
    let s = 0,
      max = 0;
    for (let i = 0; i < A; i++) {
      s = 0;
      for (let j = i; j < A; j++) {
        s += Number(C[j]);
        if (s <= B) {
          max = Math.max(max, s);
        } else {
          break;
        }
      }
    }
    return max;
  },
};
