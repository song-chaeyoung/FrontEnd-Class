import React, { useState } from "react";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: "NEXONFootballGothicBA1";
`;

const InputWrapper = styled.div`
  width: 100%;
  flex: 2;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--main-purple);
  &::placeholder {
    opacity: 1;
    transition: all 0.5s;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const BottomBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TodoEditor = ({ onCreate, onCancel }) => {
  const [value, setValue] = useState("");

  const sumbitEvent = () => {
    if (value === "") {
      alert("Todo를 작성해주세요.");
    } else {
      onCreate(value);
      onCancel();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>New Todo</Title>
        <InputWrapper>
          <Input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Input your Todo"
          ></Input>
        </InputWrapper>
        <BottomBtn>
          <Button type="line" text="CANCEL" onClick={onCancel} />
          <Button onClick={sumbitEvent} type="bg" text="APPLY" />
        </BottomBtn>
      </Wrapper>
    </Container>
  );
};

export default TodoEditor;
