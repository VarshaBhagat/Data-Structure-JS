const calculatorEl = document.querySelector(".calculator");
const displayEl = document.querySelector(".display");
let currValue = null;
let prevValue = null;
let operator = null;
let recentValue = null;
let clearNext = false;
let isResultCalculated = false;
const updateDisplay = (val) => {
    console.log(val)
  displayEl.textContent = val;
};
const appendSymbol = (value, symbol) => {
  if (symbol === ".") {
    if (value.includes(".")) return value;
    if (value == "") return "0.";
    return currValue + symbol;
  }
  if (currValue === '' || currValue === '0') {
    return symbol;
  }
  return currValue + symbol;
};
const performOperation = (operator, a, b) => {
    console.log(a,b,operator)
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
  }
};
calculatorEl.addEventListener("click", (e) => {
  if (!e.target.classList.contains("btn")) {
    return;
  }
  // If number or decimal
  const symbol = e.target.dataset.value;
  if (!Number.isNaN(+symbol)) {
   prevValue = currValue
   currValue=symbol;
   updateDisplay(currValue);
  }
  if(["-", "*", "+", "/"].includes(symbol)){
    operator = symbol
  }
  if(prevValue && currValue && symbol =="="){
    currValue=performOperation(operator, +prevValue,+currValue)
    updateDisplay(currValue);
    prevValue=null
  }

  if (symbol === "c") {
    currValue = "";
    recentValue = null;
    prevValue = null;
    operator = null;
    updateDisplay("0");
    return;
  }
});
updateDisplay("0");
