function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
  li.classList.add("checkable");
  if (li.innerHTML === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
    newItem.value = '';
  }
}

var listItems = document.getElementsByClassName("checkable");
for (li of listItems):
  li.addEventListener('click', function() {
    li.classList.toggle('checked');
  });
