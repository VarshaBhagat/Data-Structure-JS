/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    
    const n = nums.length;
        if (n === 0) return 0;
        if (n === 1) return nums[0];
        if (n === 2) return Math.max(nums[0], nums[1]);
    
    
    const robLinear = (arr) => {
            let m= arr.length;
        if(m==0){
            return 0
        }
          if(m==1){
            return arr[0]
        }
          if(m==2){
            return Math.max(arr[0],arr[1])
        }
        let dp = new Array(n)
        dp[0]=arr[0]
        dp[1]= Math.max(arr[0], arr[1]);
    
        for(let i=2;i<arr.length;i++){
            dp[i]=Math.max(dp[i-1], dp[i-2]+arr[i])
        }
        return dp[m-1]
        };
    
        return Math.max(
            robLinear(nums.slice(0, n - 1)), // exclude last
            robLinear(nums.slice(1))         // exclude first
        );
    
        //2, 1, 3, 
    };