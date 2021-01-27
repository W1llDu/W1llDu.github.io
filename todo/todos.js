function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  var p = document.createElement("p");
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

// get ul from localStorage
// for li in ul add button

var list = document.getElementById("list");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);

function clearChecked() {
  while (document.getElementsByClassName("checked").length > 0) {
    document.getElementsByClassName("checked")[0].remove();
  }
}

function clearAll() {
  document.getElementById("list").innerHTML = "";
}

function saveList() {
  if (localStorage.getItem("visited?") != null) {
    var ul = document.getElementById("list");
    var toStorage = [];
    for (li of ul) {
      toStorage.push(li.querySelector("p").innerHTML);
    }
  } else {
    localStorage.setItem("visited?", "true");
  }
}
