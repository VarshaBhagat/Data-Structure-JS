const inputEle = document.querySelector(".input");
const listContainer = document.querySelector("#list-container");
const todoForm = document.getElementById("todoForm");
const todo = document.getElementById("todo");

const addItem = (value) => {
  const item = todo.content.cloneNode(true);
  item.querySelector(".text").textContent = value;
  listContainer.appendChild(item);
  inputEle.value = "";
};
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const item = inputEle.value;
  if (item) {
    addItem(item);
  }
});
listContainer.addEventListener("click", (e) => {
  if (e.target.className == "edit") {
    let input = document.createElement("input");
    let text = e.target.parentElement.parentElement.querySelector(".text");
    input.value = text.textContent;
    e.target.parentElement.parentElement.replaceChild(input, text);
    let editBtn = e.target.parentElement.querySelector(".edit");
    let btn = document.createElement("button");
    btn.className = "save";
    btn.textContent = "💾";
    e.target.parentElement.replaceChild(btn, editBtn);
  } else if (e.target.className == "save") {
    let text = document.createElement("p");
    text.className = "text";
    let input = e.target.parentElement.parentElement.querySelector("input");
    text.textContent = input.value;
    e.target.parentElement.parentElement.replaceChild(text, input);

    let saveBtn = e.target.parentElement.querySelector(".save");
    let btn = document.createElement("button");
    btn.className = "edit";
    btn.textContent = "✏️";
    e.target.parentElement.replaceChild(btn, saveBtn);
  } else if (e.target.className == "delete") {
    e.target.parentElement.parentElement.remove();
  }
});
