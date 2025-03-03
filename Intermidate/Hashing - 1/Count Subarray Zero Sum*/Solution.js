module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.
    let m = new Map();
    let sum = 0;
    m.set(0, 1);
    let c = 0;
    for (let i = 0; i < A.length; i++) {
      sum += A[i];

      if (m.has(sum)) {
        c += m.get(sum);
        m.set(sum, m.get(sum) + 1);
      } else {
        m.set(sum, 1);
      }
    }
    return c;
  },
};
