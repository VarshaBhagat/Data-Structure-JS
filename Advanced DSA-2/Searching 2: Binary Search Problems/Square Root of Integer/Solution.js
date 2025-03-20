module.exports = { 
    //param A : an integer
    //return an integer
       sqrt : function(A) {
           // let ans=0
           // for(let i=1;i*i<=A;i++){
           //     if(i*i<=A){
           //         ans=i
           //     }
           // }
           // return ans
           //time complexity: square root n
           let low=0, ans=0, high=A;
           while(low<=high){
               let mid=Math.floor((low+high)/2);
               if(mid*mid<=A){
                   low=mid+1;
                   ans=mid
               } else {
                   high=mid-1
               }
           }
           return ans
           // time complexity: logn
       }
   };