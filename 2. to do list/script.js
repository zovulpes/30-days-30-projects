const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("You must write something!");
  } else {
    let newLi = document.createElement("li");
    newLi.innerHTML = inputBox.value;
    listContainer.appendChild(newLi);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newLi.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
