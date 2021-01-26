function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
  li.classList.add("checkable");
  li.onclick = function() {
    li.classList.toggle("checked");
  });
  if (newItem.value === "") {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
    newItem.value = "";
  }
}

// import li from localStorage

var listItems = document.getElementsByTagName("li");
for (li of listItems) {
  li.onclick = function() {
    li.classList.toggle("checked");
  });
}
