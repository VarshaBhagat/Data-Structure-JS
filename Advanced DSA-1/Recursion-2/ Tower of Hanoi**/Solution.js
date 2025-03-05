module.exports = {
  towerOfHanoi: function (A) {
    let arr = [];
    function TOH(A, start, end, aux) {
      if (A == 0) {
        return;
      }
      TOH(A - 1, start, aux, end);
      arr.push([A, start, end]);
      TOH(A - 1, aux, end, start);
    }
    TOH(A, 1, 3, 2);
    return arr;
  },
};
