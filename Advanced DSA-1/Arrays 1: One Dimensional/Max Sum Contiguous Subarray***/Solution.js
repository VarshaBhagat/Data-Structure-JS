module.exports = { 
    //param A : array of integers
    //return an integer
       maxSubArray : function(A){
           let ans=-Infinity, s=0
           for(let i=0;i<A.length;i++){
               s+=A[i]
               if(ans<s){
                   ans=s
               }
               if(s<0){
                   s=0
               }
           }
           return ans
       }
   };
//Kadane's Algorithm   