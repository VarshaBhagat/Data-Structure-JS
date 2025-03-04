module.exports = { 
    //param A : integer
       recur: function(A){
           if(A==0){
               return
           }
           
           this.recur(A-1)
           process.stdout.write(A.toString()+" ")
           
       },
       solve : function(A){
         this.recur(A)
         console.log()
       }
   };
   