module.exports = {
  //param A : integer
  //return an integer
  //A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself.
  solve: function (A) {
    if(A<2){
        return 0
    }
    let fact = 0;
    for (let i = 1; i * i <= A; i++) {
      if (A % i == 0) {
        if (A / i == i) {
          fact++;
        } else fact = fact + 2;
      }
    }
    if(fact>2){
        return 0
    }
    return 1
  },
};
