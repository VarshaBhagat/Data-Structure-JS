const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const changeBy = document.getElementById("changeBy");
const reset = document.getElementById("reset");
const value = document.querySelector(".value");

increment.addEventListener("click", () => {
  value.textContent =
    parseInt(value.textContent) + parseInt(changeBy.valueAsNumber);
});

decrement.addEventListener("click", (e) => {
  value.textContent =
    parseInt(value.textContent) - parseInt(changeBy.valueAsNumber);
});

reset.addEventListener("click", (e) => {
  value.textContent = 0;
});
