let lat = 40.5308;
let lon = -112.2983;
let API_key = "55f3ff40b05ef560ade45e0e6c438b17";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_key}`;

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let current_temp = document.getElementById("current_temp");

    let temp = jsObject.main.temp;
    // console.log(weather);
    current_temp.innerHTML = jsObject.main.temp;

    let curent_desc = document.getElementById("current-desc");
    curent_desc.innerHTML = jsObject.weather[0].description;

    let current_windChill = document.getElementById("current-windChill");
    current_windChill.innerHTML = jsObject.main.feels_like;

    let current_humid = document.getElementById("current-humid");
    current_humid.innerHTML = jsObject.main.humidity;

    let current_windSpeed = document.getElementById("current-windSpeed");
    current_windSpeed.innerHTML = jsObject.wind.speed;
  });
