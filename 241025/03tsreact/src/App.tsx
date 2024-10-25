import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Button from "./components/Button";
import Label from "./components/Label";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

const App = () => {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Counter App</Title>
        <Contents>
          <Button label="-" onClick={sub} />
          <Label counter={counter} />
          <Button label="+" onClick={add} />
        </Contents>
      </Container>
    </>
  );
};

export default App;
