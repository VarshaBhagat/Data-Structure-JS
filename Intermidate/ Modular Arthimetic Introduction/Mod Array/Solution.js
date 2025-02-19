module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       solve : function(A, B){
           let curr=1,ans=0;
           for(let i=A.length-1;i>=0;i--){
               let dig =Number(A[i]);
               let term = (dig * curr) % B;
               ans = (ans + term) % B;
               curr = (curr * 10) % B;
           }
           return ans%B
       }
   };
   