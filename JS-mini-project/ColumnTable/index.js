let row = document.getElementById("row");
let column = document.getElementById("column");
function createMatrix(rows, columns) {
  let arr = [];
  for (let i = 0; i < Number(rows); i++) {
    let a = [];
    for (let j = 0; j < Number(columns); j++) {
      a.push(1);
    }
    arr.push(a);
  }
  let k = 1;
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (arr[j][i]) {
        arr[j][i] = k++;
      }
    }
  }
  return arr;
}
const generateTable = (row, column) => {
  let matrix = createMatrix(row, column);
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < row; i++) {
    let row = document.createElement("tr");
    row.className="row"
    for (let j = 0; j < column; j++) {
      let cell = document.createElement("td");
      cell.textContent = matrix[i][j];
      cell.className="cell"
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  return fragment;
};
window.onload = function() {
    generateTable(row.value, column.value)
  };
function updateTable(row, column) {
  document
    .getElementById("content")
    .replaceChildren(generateTable(row, column));
}

row.addEventListener("input", () => {
  updateTable(row.value, column.value);
});
column.addEventListener("input", () => {
  updateTable(row.value, column.value);
});
