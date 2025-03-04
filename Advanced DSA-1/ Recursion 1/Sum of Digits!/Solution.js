module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
           if(A==0){
               return 0
           }
           return A%10 + this.solve(Math.floor(A/10))
       }
   };
   