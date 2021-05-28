const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const todos = document.getElementById('todos');
const clearBtn = document.getElementById('clearBtn');
const task = document.getElementsByTagName('LI');

let tasks = [];

input.addEventListener("keypress", event => {
  if (event.keyCode == 13) {
   event.preventDefault();
   addBtn.click();
  }
});

addBtn.addEventListener("click", () => {
  if(input.value != "") {
    // Back-end oprations
    tasks.push(input.value);
    console.log(tasks);
    localStorage.setItem("savedTasks", JSON.stringify(tasks)); // localStorage only supports strings

    // Front-end update
    todos.innerHTML += `<li onclick="crossout(event)">${input.value}<span class="removeTask" onclick="_removeTask(event)">X</span></li>`; // Use 'this' to get the li element that called function

    input.value = "";
  } else {
    alert("You dont't have any tasks to add!");
  }
});

clearBtn.addEventListener("click", () => {
  localStorage.removeItem("savedTasks");
  todos.innerHTML = "";
  tasks = [];
});

function crossout(event) {
  if(event.target.classList.contains("crossedOut")) {
    event.target.classList.remove("crossedOut");
  } else {
    event.target.classList.add("crossedOut");
  }
}

/*
function _removeTask(event) {

}*/

window.onload = () => {
  if(localStorage.getItem("savedTasks") != null) {
    tasks = JSON.parse(localStorage.getItem("savedTasks"));
    let savedTasks = JSON.parse(localStorage.getItem("savedTasks")); // convert string back to array
    savedTasks.forEach(item => {
      todos.innerHTML += `<li onclick="crossout(event)">${item}<span class="removeTask" onclick="_removeTask(event)">X</span></li>`;
    });
  } else {
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
  }
}
