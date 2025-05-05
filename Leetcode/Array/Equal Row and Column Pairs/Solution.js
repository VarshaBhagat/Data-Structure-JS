/**
 * @param {number[][]} grid
 * @return {number}
 */

var equalPairs = function (grid) {
  let arr1 = [];
  for (let i = 0; i < grid.length; i++) {
    let a = "";
    for (let j = 0; j < grid[0].length; j++) {
      a += grid[i][j] + ",";
    }
    arr1.push(a);
  }
  let arr2 = [];
  for (let i = 0; i < grid[0].length; i++) {
    let a = "";
    for (let j = 0; j < grid.length; j++) {
      a += grid[j][i] + ",";
    }
    arr2.push(a);
  }
  let c = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        c++;
      }
    }
  }
  // [[11,1],[1,11]]
  // [[111],[111]]
  return c;
};
