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
    localStorage.setItem("savedTasks", tasks);

    // Front-end update
    let task = `<li>${input.value}</li>`;
    todos.innerHTML += task;

    input.value = "";
  } else {
    alert("You dont't have any tasks to add!");
  }
});
