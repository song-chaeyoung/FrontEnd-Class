import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const WeatherBtn = ({ cities, setCity, handleCityChange }) => {
  // const cityClick = (e) => {
  //   setCity(e.target.innerText.toLowerCase());
  // };

  return (
    <ButtonGroup>
      <Button onClick={() => handleCityChange("")} variant="warning">
        Current Location
      </Button>
      {cities.map((city) => (
        <Button
          onClick={(e) => {
            handleCityChange(city);
          }}
          key={city}
          variant="secondary"
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherBtn;
