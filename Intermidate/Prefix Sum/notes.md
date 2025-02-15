** Prefix sum formula
ps[0]=A[0]
for(i=1;i<A.length;i++){
    ps[i]=ps[i-1]+A[i]
}

// A[i]=ps[i]-ps[i-1]