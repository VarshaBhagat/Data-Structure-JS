module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let arr = [];
    for (let i = 0; i < A.length; i++) {
      if (A[i] == "{" || A[i] == "(" || A[i] == "[") {
        arr.push(A[i]);
      } else if (A[i] == "}") {
        if (arr.length == 0) {
          return 0;
        }
        let c = arr[arr.length - 1];
        if (c == "{") {
          arr.pop();
        }
      } else if (A[i] == "]") {
        if (arr.length == 0) {
          return 0;
        }
        let c = arr[arr.length - 1];
        if (c == "[") {
          arr.pop();
        }
      } else if (A[i] == ")") {
        if (arr.length == 0) {
          return 0;
        }
        let c = arr[arr.length - 1];
        if (c == "(") {
          arr.pop();
        }
      }
    }
    if (arr.length == 0) {
      return 1;
    }
    return 0;
  },
};
