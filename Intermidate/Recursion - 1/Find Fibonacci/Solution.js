module.exports = {
  //param A : integer
  //return an integer
  findAthFibonacci: function (A) {
    if (A == 0) {
      return A;
    }
    if (A == 1) {
      return A;
    }
    return this.findAthFibonacci(A - 1) + this.findAthFibonacci(A - 2);
  },
};
