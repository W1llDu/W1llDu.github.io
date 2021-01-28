function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  var p = document.createElement("p");
  p.width = "50%";
  p.innerHTML = newItem.value;
  li.appendChild(p);
  var button = document.createElement("button");
  button.innerHTML = "remove";
  button.onclick = function() {
    this.parentElement.remove();
  };
  li.appendChild(button);
  if (newItem.value === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
    newItem.value = "";
  }
}

var list = localStorage.getItem("list");
var checked = localStorage.getItem("checked");
if (list != null) {
  list = JSON.parse(list);
  checked = JSON.parse(checked);
  var i;
  for (i = 0; i < list.length; i++) {
    addFromStorage(list[i], checked[i]);
  }
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

list = document.getElementById("list");
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
  document.getElementById("list").innerHTML = "";
}

function saveList() {
  var list = document.getElementsByTagName("li");
  var toStorage = [];
  var i;
  for (i = 0; i < list.length; i++) {
    toStorage.push(list[i].querySelector("p").innerHTML);
  }
  localStorage.setItem("list", JSON.stringify(toStorage));
  toStorage = [];
  var j;
  for (j = 0; j < list.length; j++) {
    toStorage.push(list[j].querySelector("p").classList.contains("checked"));
  }
  localStorage.setItem("checked", JSON.stringify(toStorage));
}
