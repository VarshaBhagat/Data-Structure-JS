// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

process.stdin.resume();
process.stdin.setEncoding("utf8");
var arr = "";
process.stdin.on("data", function (chunk) {
  arr += chunk;
});
process.stdin.on("end", function () {
    let dp=[];
    function fib(n){
      if(n<=1){
          return n
      }
      if(dp[n]){
          return dp[n]
      }
      dp[n]=fib(n-1)+fib(n-2)
      return dp[n]
    }
    console.log(fib(+arr));
});