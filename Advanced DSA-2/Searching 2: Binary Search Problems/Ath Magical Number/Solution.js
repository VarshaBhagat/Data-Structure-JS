module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    // time complexity - O(n)
    // let low=1, ans=-1;
    // while(A>0){
    //     if((low%B==0) || (low%C==0)){
    //         ans=low
    //          A--
    //     }
    //    low++
    // }
    // return ans%1000000007
    function gcd(a, b) {
      return b ? gcd(b, a % b) : a;
    }
    // lcm of B and C
    let mod = 1000000007;
    let lcm = (B * C) / gcd(B, C);
    let low = Math.min(B, C),
      high = A * Math.min(B, C),
      ans;
    while (low <= high) {
      let m = Math.floor((low + high) / 2);
      let temp = Math.floor(m / B) + Math.floor(m / C) - Math.floor(m / lcm);
      if (temp >= A) {
        ans = m;
        high = m - 1;
      } else {
        low = m + 1;
      }
    }
    return ans % mod;
  },
};
