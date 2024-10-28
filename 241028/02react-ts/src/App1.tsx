import React, { useState } from "react";
import { styled, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${(props) => props.theme.bgColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const App1 = () => {
  const [value, setValue] = useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Hello World!</Title>
        <form>
          <input
            type="text"
            placeholder="username"
            value={value}
            onChange={onChange}
          />
        </form>
      </Container>
    </>
  );
};

export default App1;
