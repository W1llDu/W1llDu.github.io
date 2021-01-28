window.addEventListener("load", function() {
  let long;
  let lat;
  let ft;
  let ct;
  let loc;
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
      })
    });
  }
});
