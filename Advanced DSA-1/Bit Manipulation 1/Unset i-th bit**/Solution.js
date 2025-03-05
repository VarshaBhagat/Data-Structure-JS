module.exports = { 
    //param A : integer
    //param B : integer
    //return an integer
       solve : function(A, B){
           if((A>>B)&1==1){
               return A^(1<<B)
           }
           return A
       }
   };
   