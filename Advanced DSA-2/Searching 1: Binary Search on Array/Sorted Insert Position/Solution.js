module.exports = { 
    //param A : array of integers
    //param B : integer
    //return an integer
       searchInsert : function(A, B){
   
   
   
          let low=0, high=A.length-1;
          while(low<=high){
              let m=low+Math.floor((high-low)/2)
              if(A[m]==B){
                  return m
              } else if(A[m]<B){
                  low=m+1
              } else {
                  high=m-1
              }
          }
          return low
       }
   };
   