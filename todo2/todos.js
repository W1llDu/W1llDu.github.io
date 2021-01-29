var todos = localStorage.getItem("list");
if (todos != null) {
  todos = JSON.parse(list);
} else {
  todos = [];
}
updateDisplay();

function addInput() {
  todos.push({value: document.getElementById("item").value, checked: false});
  document.getElementById("item").value = "";
  updateDisplay();
}

function clearChecked() {
  let i;
  while (containsChecked(todos)) {
  }
  updateDisplay();
}

function clearAll() {
  todos = [];
  updateDisplay();
}

function saveList() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function updateDisplay() {
  todos.forEach(addItem);
}

function addItem(li) {
  var li = document.createElement("li");
  var p = document.createElement("p");
  p.width = "50%";
  p.innerHTML = li.value;
  li.appendChild(p);
  var button = document.createElement("button");
  button.innerHTML = "remove";
  button.onclick = function() {
    this.parentElement.remove();
  };
  li.appendChild(button);
  document.getElementById("list").appendChild(li);
  }
}
