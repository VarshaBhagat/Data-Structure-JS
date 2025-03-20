function solve() {
  // Initalize your variables here
  this.arr = [];
}
solve.prototype.push = function (e) {
  this.arr.push({
    value: e,
    min: this.arr.length == 0 ? e : Math.min(e, this.getMin()),
  });
};
solve.prototype.pop = function () {
  if (this.arr.length > 0) {
    this.arr.pop();
  }
  return;
};
solve.prototype.top = function () {
  // return top
  if (this.arr.length == 0) {
    return -1;
  }
  return this.arr.length ? this.arr[this.arr.length - 1].value : -1;
};
solve.prototype.getMin = function () {
  // return minimum
  if (this.arr.length == 0) {
    return -1;
  }
  return this.arr[this.arr.length - 1].min;

  if (this.stack.length == 0) {
    return -1;
  }
  return this.stack[this.stack.length - 1].min;
};
module.exports = {
  solve: solve,
};
