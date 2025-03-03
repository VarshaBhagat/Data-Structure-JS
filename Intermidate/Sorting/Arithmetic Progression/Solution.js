module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
        A=A.sort((a,b)=>b-a);
        let c=Math.abs(A[0]-A[1])
        for(let i=2;i<A.length;i++){
           if(Math.abs(A[i-1]-A[i]!=c)){
               return 0
           }
        }
        return 1
       }
   };
   