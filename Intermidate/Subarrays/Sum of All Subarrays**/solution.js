odule.exports = { 
    //param A : array of integers
    //return a long integers
       subarraySum : function(A){
           let s=0n, n=BigInt(A.length);
           for(let i=0;i<A.length;i++){
            //contribution technique (i+1)(n-i)* ele, where i is index
               s+= A[i]*(BigInt(i)+1n)*(n-BigInt(i))
           }
           return s
       }
   };
   