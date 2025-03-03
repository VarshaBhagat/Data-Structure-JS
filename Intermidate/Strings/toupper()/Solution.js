module.exports = { 
    //param A : array of characters
    //return a array of characters
       to_upper : function(A){
           for(let i=0;i<A.length;i++){

              if("a".charCodeAt(0)<=A[i].charCodeAt(0) &&"z".charCodeAt(0)>=A[i].charCodeAt(0)){
                //for lowercase +32 and change if condition A to Z
                  A[i]=String.fromCharCode(A[i].charCodeAt(0)-32)
              }
           }
           return A
       }
   };
   