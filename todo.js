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
  if(input.value != "") {
    tasks.push(input.value);
    input.value = "";
  } else {
    alert("You dont't have any tasks to add!");
  }
});
