var todos = localStorage.getItem("list");
var checked = localStorage.getItem("checked");
if (todos != null) {
  todos = JSON.parse(list);
  checked = JSON.parse(checked);
} else {
  todos = [];
  checked = [];
}

function addInput() {
  todos.push(document.getElementById("item").value);
  checked.push();
}

function addFromStorage(v, b) {
  var li = document.createElement("li");
  var p = document.createElement("p");
  p.innerHTML = v;
  if (b) {
    p.classList.add("checked");
  }
  li.appendChild(p);
  var button = document.createElement("button");
  button.innerHTML = "remove";
  button.onclick = function() {
    this.parentElement.remove();
  };
  li.appendChild(button);
  document.getElementById("list").appendChild(li);
}

var list = document.getElementById("list");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "P") {
    ev.target.classList.toggle("checked");
  }
}, false);

function clearChecked() {
  while (document.getElementsByClassName("checked").length > 0) {
    document.getElementsByClassName("checked")[0].parentElement.remove();
  }
}

function clearAll() {
  todos = [];
  checked = [];
}

function saveList() {
  localStorage.setItem("todos", JSON.stringify(todos));
  localStorage.setItem("checked", JSON.stringify(checked));
}
