module.exports = { 
    //param A : array of integers
    //return an integer
       solve : function(A){
           A = A.sort()
           for(var i=0;i<A.length;i++){
               if (A[i] == A[i+1]) {
                        continue;
               }
               if(A[i] == A.length - (i + 1)){
                   return 1;
               }
           }
           return -1
       }
   };
   