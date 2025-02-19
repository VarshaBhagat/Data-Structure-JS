module.exports = {
  //param A : integer
  //param B : array of integers
  //return a long integers
  solve: function (A, B) {
    let zero = 0,
      count = 0;
    for (let i = 0; i < A; i++) {
      if (B[i] == 0) {
        zero++;
      } else {
        count += (zero * (zero + 1)) / 2;
        zero = 0;
      }
    }

    count += (zero * (zero + 1)) / 2;
    return (A * (A + 1)) / 2 - count;
  },
};
