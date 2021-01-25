function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.innerHTML;
  newItem.innerHTML = "";
  document.getElementById("list").appendChild(li);
}
