import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color};
`;

// const Box = styled.div`
//   width: 100px;
//   height: 100px;
//   /* background: tomato; */
//   background: ${({ bgColor }) => bgColor};
// `;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Text = styled.span`
//   color: #fff;
// `;

// const Btn = styled.button`
//   background: tomato;
//   color: #fff;
//   border: none;
//   border-radius: 6px;
//   padding: 10px 18px;
//   cursor: pointer;
// `;

// const Input = styled.input.attrs({ required: true })`
//   background: ${({ required }) => (required ? "tomato" : "teal")};
//   background: tomato;
//   border: none;
// `;

const rotationAnimation = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 50%;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box2 = styled.div`
  width: 200px;
  height: 200px;
  background: tomato;
  animation: ${rotationAnimation} 1s ease-in-out infinite alternate;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    font-size: 30px;
    transition: all 0.3s;
    &:hover {
      font-size: 60px;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

const App = () => {
  return (
    <Container>
      {/* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */}
      {/* <Btn>Login</Btn>
      <Btn as="a" href="#">
        Logout
      </Btn> */}
      {/* <Input required="true"></Input> */}
      <Title>Hello, World!</Title>
      <Box2>
        <Emoji>👻</Emoji>
      </Box2>
      <Emoji>🙂‍↔️</Emoji>
    </Container>
  );
};

export default App;
