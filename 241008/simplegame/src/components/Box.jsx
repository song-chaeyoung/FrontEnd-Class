import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 350px;
  height: 350px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
`;

const Img = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 30px;
`;

const Result = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;

const Box = ({ title, item, result }) => {
  if (title === "Computer" && result !== "TIE") {
    result = result === "WIN" ? "LOSE" : "WIN";
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Img src={item && item.img} alt={title} />
      <Result>{result}</Result>
    </Wrapper>
  );
};

export default Box;
