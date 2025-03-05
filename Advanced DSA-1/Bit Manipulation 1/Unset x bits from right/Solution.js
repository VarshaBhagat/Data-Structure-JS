module.exports = { 
    //param A : long
    //param B : integer
    //return a long integers
       solve : function(A, B){
           A = A>>BigInt(B); // Unsets any set numbers by Bth place, for example: 1011>>0010
           A = A<<BigInt(B); // Brings back digits post Bth place, our answer, for example 1000<<0010
           return A;
   
       }
   };
   