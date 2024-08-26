import env from "./env.js";

const getCurreentWeather = (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${env.API_KEY}&units=metric`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.querySelector(".icon");
      const temp = document.querySelector(".temp");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");

      let weatherName;
      switch (data.weather[0].main) {
        case "Clouds":
          weatherName = "구름";
          break;
        case "Sunny":
          weatherName = "맑음";
          break;
        case "Rain":
          weatherName = "비";
          break;
      }
      let cityName;
      switch (data.name) {
        case "Jamwon-dong":
          cityName = "서울시 잠원동";
          break;
      }
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temp.innerText = `${data.main.temp} ℃`;
      city.innerText = cityName;
      weather.innerText = `${weatherName}`;
      console.log(data);
    });
};

const getPosition = (position) => {
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  getCurreentWeather(latitude, longitude);
};

const errorHandler = (err) => {
  const noti = document.querySelector(".noti");
  const main = document.querySelector("main");
  noti.style.display = "block";
  main.style.display = "none";
  alert(err.message);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
} else {
  alert("Geolocation id not Available!");
}
