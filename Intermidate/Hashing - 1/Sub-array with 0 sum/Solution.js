// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.

    let m = new Map();
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
      sum += A[i];
      if (m.has(sum)) {
        return 1;
      } else {
        m.set(sum, 1);
      }
    }

    return m.get(0) == undefined ? 0 : m.get(0);
  },
};
