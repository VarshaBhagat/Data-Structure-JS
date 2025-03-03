module.exports = {
  //param A : string
  //param B : string
  //return a strings
  addBinary: function (A, B) {
    let i = A.length - 1,
      j = B.length - 1;
    let c = 0;
    let ans = "";
    let sum = 0;
    while (i >= 0 || j >= 0 || c == 1) {
      sum = Number(c);
      if (A[i] > 0) {
        sum += Number(A[i]);
      }
      if (B[j] > 0) {
        sum += Number(B[j]);
      }
      ans += String(sum % 2);
      c = Math.floor(sum / 2);
      i--;
      j--;
    }
    return ans.split("").reverse().join("");
  },
};
