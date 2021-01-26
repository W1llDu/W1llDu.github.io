function addInput() {
  var newItem = document.getElementById("item");
  var li = document.createElement("li");
  li.innerHTML = newItem.value;
  if (li.innerHTML === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
    newItem.value = '';
  }
}

var list = document.getElementsByTagName("li");
for (li in list):
  li.addEventListener('click', function(ev) {
    ev.target.classList.toggle('checked');
  });
