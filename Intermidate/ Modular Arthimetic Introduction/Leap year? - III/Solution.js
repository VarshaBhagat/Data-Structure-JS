module.exports = { 
    //param A : integer
    //return an integer
       solve : function(A){
           
           if(A%400==0){return 1}
          if(A%100 !=0 && A%4==0){return 1}
          
           return 0
       }
   };
   