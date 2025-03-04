module.exports = {
  //param A : array of integers
  //return a array of integers
  plusOne: function (A) {
    let c = 1;
    for (let i = A.length - 1; i >= 0; i--) {
      let s = c + A[i];
      A[i] = s % 10;
      c = Math.floor(s / 10);
    }
    if (c) {
      A.unshift(1);
    }
    while (A[0] === 0) A.shift();
    return A;
  },
};
