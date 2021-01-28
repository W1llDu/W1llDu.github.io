window.addEventListener("load", function() {
  let long;
  let lat;
  let tz = document.getElementById("timezone");
  let iconContainer = document.getElementById("icon");
  let temp = document.getElementById("temperature");
  let ts = "C";
  let desc = document.getElementById("desc");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      
      const api = `https://api.weatherapi.com/v1/current.json?key=9b5e4d329c724f6ead0151042212801&q=${lat},${long}`;
      
      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const {temp_c, temp_f, condition} = data.current;
        tz.innerHTML =  data.location.name;
        temp.innerHTML = temp_c.toString() + "\u00B0" + ts;
        temp.onclick = function() {
          if (ts == "C") {
            ts = "F";
            temp.innerHTML = temp_f.toString() + "\u00B0" + ts;
          } else if (ts == "F") {
            ts = "C";
            temp.innerHTML = temp_c.toString() + "\u00B0" + ts;
          }
        };
        desc.innerHTML = condition.text;
        let icon = document.createElement("img");
        icon.src = condition.icon;
        iconContainer.innerHTML = "";
        iconContainer.appendChild(icon);
      })
    });
  }
});
