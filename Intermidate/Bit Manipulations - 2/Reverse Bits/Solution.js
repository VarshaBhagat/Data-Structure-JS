module.exports = {
  //param A : integer
  //return an integer
  reverse: function (A) {
    let c = 31;
    let n = 0;
    for (let i = 0; i < 32; i++) {
      if ((A >> i) & 1) {
        n += Math.pow(2, c - i);
      }
    }

    return n;
  },
};
