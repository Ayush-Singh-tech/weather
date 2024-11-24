const apiKey = "5a27f5961657f09fd4cafc115bb72cd5";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const maxTemp = document.querySelector(".maxTemp");
const minTemp = document.querySelector(".minTemp");
const feelsLike = document.querySelector(".feelTemp");

async function weatherReport(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  document.querySelector(".maxTemp").innerHTML = data.main.temp_max + "Km/h";
  document.querySelector(".minTemp").innerHTML = data.wind.speed + "Km/h";
  document.querySelector(".feelTemp").innerHTML = data.wind.speed + "Km/h";

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Dizzle") {
    weatherIcon.src = "images/dizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else {
    weatherIcon.src = "images/snow.png";
  }

  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {
  weatherReport(searchBox.value);
});
