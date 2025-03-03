module.exports = {
  //param A : array of integers
  //return a strings
  largestNumber: function (A) {
    const compare = (a, b) => {
      let ab = "" + a + b;
      let ba = "" + b + a;
      return ba - ab;
    };
    A.sort(compare);
    let m = A.join("");
    return parseInt(m, 10) > 0 ? m : 0;
  },
};
