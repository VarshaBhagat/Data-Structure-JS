// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.

    let m = new Map();
    for (let i = 0; i < A.length; i++) {
      if (m.has(A[i])) {
        m.set(A[i], m.get(A[i]) + 1);
      } else {
        m.set(A[i], 1);
      }
    }
    let ans = [];
    for (let i = 0; i < B.length; i++) {
      if (m.has(B[i])) {
        ans.push(B[i]);
        m.set(B[i], m.get(B[i]) - 1);
        if (m.get(B[i]) == 0) {
          m.delete(B[i]);
        }
      }
    }
    return ans;
  },
};
