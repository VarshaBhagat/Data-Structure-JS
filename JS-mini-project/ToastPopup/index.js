const button = document.getElementById("button");
const leftPosition = document.getElementById("left-position");
const topPosition = document.getElementById("top-position");
const type = document.getElementById("type");
const text = document.getElementById("input");
const duration = document.getElementById("duration");
const toastTemplate = document.getElementById("toast-template");
const toast = document.querySelector(".toast");

function removeToast() {
  console.log("inside");
  toastTemplate.style.display = "none";
  document.querySelector(".toast-message").textContent = "";
  const toastlist = toast.classList;
  toastlist.remove(type.value);
  toastlist.remove(leftPosition.value);
  toastlist.remove(topPosition.value);
}
function showToast() {
  document.body.appendChild(toastTemplate);
  toastTemplate.style.display = "block";
  document.querySelector(".toast-message").textContent = text.value;
  const toastlist = toast.classList;
  toastlist.add(type.value);
  toastlist.add(leftPosition.value);
  toastlist.add(topPosition.value);
  document.querySelector(".toast").addEventListener("click", removeToast);
  setTimeout(removeToast, duration.value*1000);
}
button.addEventListener("click", showToast);
