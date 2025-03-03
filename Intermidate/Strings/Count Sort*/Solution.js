module.exports = { 
    //param A : array of integers
    //return a array of integers
       solve : function(A){
           let a =[]
           for(let i=0;i<A.length;i++){
               let index=A[i];
               if(a[index]){
                  a[index]=a[index]+1 
               } else {
                   a[index]=1
               }
           }
           let ans=[]
           for(let i=0;i<a.length;i++){
   
                while(a[i] && a[i]>0){
                    ans.push(i)
                    a[i]=a[i]-1
                }
               
           }
           return ans
       }
   };
   