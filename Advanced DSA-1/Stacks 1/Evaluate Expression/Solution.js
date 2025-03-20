module.exports = {
  //param A : array of strings
  //return an integer
  evalRPN: function (A) {
    let s = 0;
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] == "+" || A[i] == "-" || A[i] == "*" || A[i] == "/") {
        let op = A[i];
        let val2 = arr.pop();
        let val1 = arr.pop();
        let res = Math.floor(eval(val1 + " " + op + " " + val2));
        arr.push(res.toString());
      } else {
        arr.push(A[i]);
      }
    }
    return arr[0];
  },
};
