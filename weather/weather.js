window.addEventListener("load", function() {
  let long;
  let lat;
  let tz = document.getElemetnById("timezone");
  let icon = document.getElementById("icon");
  let temp = document.getElementById("temperature");
  let ts = "C";
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
        const {temp_c, temp_f, location} = data.current;
        tz.innerHTML =  location.name;
        temp.innerHTML = temp_c.toString() + ts;
        temp.onClick = function() {
          if (ts == "C") {
            ts = "F";
            temp.innerHTML = temp_f.toString() + ts;
          } else if (ts == "F") {
            ts = "C";
            temp.innerHTML = temp_c.toString() + ts;
          }
        };
      })
    });
  }
});
