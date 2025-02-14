module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A) {
           let fact=0;
           for(let i=1;i*i<=A;i++){
               if(A%i==0){
                   if(A/i == i){
                       fact++
                   } else fact=fact+2
               }
           }
           return fact;
       }
   };
   