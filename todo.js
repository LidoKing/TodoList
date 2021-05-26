const input = document.getElementById('input');
const button = document.getElementById('button');

let tasks = [];

input.addEventListener("keypress", event => {
  if (event.keyCode == 13) {
   event.preventDefault();
   button.click();
  }
});

button.addEventListener("click", () => {
  tasks.push(input.value);
  input.value = "";
  console.log(tasks);
});
