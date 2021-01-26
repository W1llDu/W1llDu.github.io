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

var list = document.getElementsByClassName("checkable");
for (li in list):
  li.addEventListener('click', function() {
    li.classList.toggle('checked');
  });
