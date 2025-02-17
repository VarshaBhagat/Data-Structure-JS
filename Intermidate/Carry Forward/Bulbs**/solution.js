module.exports = {
  //param A : array of integers
  //return an integer
  bulbs: function (A) {
    let ckpt = 0,
      c = 0;
    for (let i = 0; i < A.length; i++) {
      if (ckpt == A[i]) {
        c++;
        if (ckpt == 0) {
          ckpt = 1;
        } else {
          ckpt = 0;
        }
      }
    }
    return c;
  },
};
