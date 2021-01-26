function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
  var button = document.createElement("button");
  button.onclick = function() {
  };
  li.appendChild(button);
  if (newItem.value === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
    newItem.value = "";
  }
}

// import li from localStorage

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
  
}
