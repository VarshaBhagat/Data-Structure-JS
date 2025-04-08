module.exports = {
    //param A : array of integers
    //param B : integer
    //return an integer
    search: function (A, B) {
        let low=0, high=A.length;
        while(low<=high){


            // let mid=Math.floor((l+r)/2);
            // if (A[mid]==B) return mid;
            //mid in part 2 and target in part 1.. lets move towards left.
            // else if (A[mid]<A[0] && B>=A[0]) r=mid-1;      
            // //mid in part 1 and target in part 2..lets move towards right.  
            // else if (A[mid]>=A[0] && B<A[0]) l=mid+1;
           
            // else if (A[mid]<B) l=mid+1;
            // else r=mid-1;


            let mid=Math.floor((low+high)/2)
            if(A[mid]==B){
                return mid
                   // Check if left half is sorted
            } else if(A[mid]>=A[low]){
                if(B>=A[low] && B<A[mid]){
                    high=mid-1
                } else{
                    low=mid+1
                }
            } else {
                // Check if right half is sorted
                if(B>A[mid] && B<=A[high]){
                    low=mid+1
                } else {
                    high=mid-1
                }
            }
        }
        return -1
    }
};
