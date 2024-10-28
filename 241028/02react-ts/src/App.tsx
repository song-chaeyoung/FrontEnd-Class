import React from "react";
import styled from "styled-components";
import Circle from "./Circle";

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Circle bgColor="teal" text="Hello" borderColor="pink" />
      <Circle bgColor="tomato" />
    </Container>
  );
};

export default App;
