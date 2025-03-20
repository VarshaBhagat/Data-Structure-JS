module.exports = {
  //param A : integer
  //return an integer
  solve: function (A) {
    let c = 0,
      i = 1;
    while (A > 0) {
      A = A - i;
      if (!(A < 0)) {
        c++;
      }
      i++;
    }
    return c;
  },
};


// module.exports = { 
//   //param A : integer
//   //return an integer
//      solve : function(A){
//          let h=1;
//          while(h*(h+1)<=2*A){
//              h++
//          }
//          return h-1
//      }
//  };
 