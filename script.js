// f484d6b20222d76990539fe24db46162
const apiKey = "f484d6b20222d76990539fe24db46162";

const searchBox = document.getElementById("input-box");
const searchBtn = document.getElementById("addBtn");
const weatherIcon = document.querySelector(".weather-icon");

async function getData(city) {
  const promise = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (promise.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await promise.json();
    console.log(data);

    document.querySelector(".city-name").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
    }

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  const value = searchBox.value.trim();
  getData(value);
});
