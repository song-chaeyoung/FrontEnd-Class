import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import Box from "./Box";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const BtnGroup = styled.div`
  display: flex;
  gap: 10px;
  button {
    padding: 4px;
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE" });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "CY", pw: "1324" } });
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>{count}</h1>
        <BtnGroup>
          <button onClick={increase}>증가</button>
          <button onClick={decrease}>감소</button>
        </BtnGroup>
        <h1>{id}</h1>
        <h1>{pw}</h1>
        <button onClick={login}>로그인</button>
      </Wrapper>
    </>
  );
};

export default App;
