module.exports = {
  //param A : string
  //return an integer
  braces: function (A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      if (
        A[i] == "(" ||
        A[i] == "+" ||
        A[i] == "-" ||
        A[i] == "*" ||
        A[i] == "/"
      ) {
        arr.push(A[i]);
      } else if (A[i] == ")") {
        let c = arr[arr.length - 1];
        if (c === "+" || c === "-" || c === "*" || c === "/") {
          arr.pop();
          arr.pop();
        } else {
          return 1;
        }
      }
    }
    return 0;
  },
};
