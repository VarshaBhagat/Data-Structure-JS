module.exports = {
  //param A : string
  //return a strings
  solve: function (A) {
    let str = "";
    for (let i = 0; i < A.length; i++) {
      let charCode = A[i].charCodeAt(0);
      if (
        A[i] == "a" ||
        A[i] == "e" ||
        A[i] == "o" ||
        A[i] == "i" ||
        A[i] == "u"
      ) {
        str += "#";
      } else if (
        "a".charCodeAt(0) <= charCode &&
        "z".charCodeAt(0) >= charCode
      ) {
        str += A[i];
        str += "";
      }
    }
    return str + str;
  },
};
