module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  isValid: function (A, B, mid) {
    let students = 1,
      pagesSum = 0;
    for (let pages of A) {
      if (pages + pagesSum > mid) {
        students++;
        pagesSum = pages;
        if (students > B) return false;
      } else {
        pagesSum += pages;
      }
    }
    return true;
  },
  books: function (A, B) {
    if (A.length < B) {
      return -1;
    } else {
      let low = Math.max(...A); // Minimum possible pages
      let high = A.reduce((sum, num) => sum + num, 0); // Maximum possible pages
      let ans = high;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (this.isValid(A, B, mid)) {
          ans = mid;
          high = mid - 1; // Try for a smaller max page allocation
        } else {
          low = mid + 1;
        }
      }
      return ans;
    }
  },
};
