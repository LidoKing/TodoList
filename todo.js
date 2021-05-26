const input = document.getElementById('input');
const button = document.getElementById('button');
const todos = document.getElementById('todos');
const body = document.getElementsByTagName('body');

let tasks = [];

input.addEventListener("keypress", event => {
  if (event.keyCode == 13) {
   event.preventDefault();
   button.click();
  }
});

button.addEventListener("click", () => {
  if(input.value != "") {
    // Back-end oprations
    tasks.push(input.value);
    localStorage.setItem("savedTasks", JSON.stringify(tasks)); // localStorage only supports strings

    // Front-end update
    todos.innerHTML += `<li>${input.value}</li>`;

    input.value = "";
  } else {
    alert("You dont't have any tasks to add!");
  }
});

window.onload = () => {
  let savedTasks = JSON.parse(localStorage.getItem("savedTasks")); // convert string back to array
  savedTasks.forEach(task => {
    todos.innerHTML += `<li>${task}</li>`;
  });
}
