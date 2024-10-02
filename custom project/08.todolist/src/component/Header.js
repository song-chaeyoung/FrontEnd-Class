import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  text-align: center;
  margin: 100px 0;
`;

const MainTitle = styled.h1`
  font-size: 48px;
  font-family: "NEXONFootballGothicBA1";
  color: #333;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h5`
  font-size: 1.2rem;
  color: #666;
`;

const DateTitle = styled.h2`
  font-size: 1.6rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <MainTitle>Todo List</MainTitle>
      <DateWrapper>
        <Title>Today</Title>
        <DateTitle>{new Date().toLocaleDateString()}</DateTitle>
      </DateWrapper>
    </Wrapper>
  );
};

export default Header;
