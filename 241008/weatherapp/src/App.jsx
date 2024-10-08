import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherBox from "./components/WeatherBox";
import WeatherBtn from "./components/WeatherBtn";
import { ClipLoader } from "react-spinners";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url("https://ukhsa.blog.gov.uk/wp-content/uploads/sites/33/2023/06/rainbow-4047523_1920.jpg")
    center/cover no-repeat; */
  background: #000
    ${({ img }) => (img ? `url(${img}) center/cover no-repeat` : "#000")};
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

// const API_KEY = process.env.REACT_APP_API_KEY;
const WEATHER_KEY = import.meta.env.VITE_WEATHER_KEY;
const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [bgUrl, setBgUrl] = useState(null);
  const cities = ["Paris", "New York", "Tokyo", "Seoul"];

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      const lat = coords.latitude;
      const lon = coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCity = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCityChange = (city) => {
    if (city === "") setCity(null);
    else setCity(city);
  };

  const getBg = () => {
    const getImg = `https://api.unsplash.com/photos/random/?client_id=${UNSPLASH_KEY}`;
    fetch(getImg)
      .then((response) => response.json())
      .then(({ urls: { full } }) => {
        setBgUrl(full);
      });
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);

  // useEffect(() => {
  //   getWeatherByCity(city);
  // }, [city]);

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
      getBg();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  return (
    <div>
      <GlobalStyles />
      <Wrapper img={bgUrl} r>
        <Contents>
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <WeatherBox weather={weather} />
          <WeatherBtn
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </Contents>
      </Wrapper>
    </div>
  );
};

export default App;
