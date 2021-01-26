function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
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
  if (ev.target.tagName === "li") {
    ev.target.classList.toggle("checked");
  }
}, false);
