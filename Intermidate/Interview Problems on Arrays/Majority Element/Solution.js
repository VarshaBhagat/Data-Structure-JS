module.exports = { 
    //param A : array of integers
    //return an integer
       majorityElement : function(A){
           let candidateEle=-1, f=0;
           for(let i=0;i<A.length;i++){
               if(f==0){
                   candidateEle=A[i];
                   f=1
               } else{
                   if(candidateEle==A[i]){
                       f++
                   } else {
                       f--
                   }
               }
           }
           return Number(candidateEle)
       }
   };
   