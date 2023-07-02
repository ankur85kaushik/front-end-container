const url = "http://localhost:4000/";

fetch(url)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cityName.innerHTML = response.name;
    temp.innerHTML = response.main.temp;
    min_temp.innerHTML = response.main.temp_min;
    max_temp.innerHTML = response.main.temp_max;
    // feels_like.innerHTML = response.feels_like;
    // humidity.innerHTML = response.humidity;
    // cloud_pct.innerHTML = response.cloud_pct;
    wind_speed.innerHTML = response.wind.speed;
    wind_degrees.innerHTML = response.wind.deg;
    Latitude.innerHTML = response.coord.lat;
    Longitude.innerHTML = response.coord.lon;
    // sunrise.innerHTML = response.sunrise;
    // sunset.innerHTML = response.sunset;
  })
  .catch((error) => console.error(error));
