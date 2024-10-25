import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import DataView from "./components/DataView";
import TextInput from "./components/TextInput";
import Button from "./components/Button";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: #eee;
`;

const mockData = ["타입스크립트 복습하기", "리액트 공부하기"];

const App = () => {
  const [todolist, setTodolist] = useState(mockData);
  const [toDo, setToDo] = useState("");

  const onDelete = (todo: string) => {
    setTodolist(todolist.filter((it) => it !== todo));
  };

  const onCreate = () => {
    if (toDo === "") return;
    setTodolist([...todolist, toDo]);
    setToDo("");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <DataView todoList={todolist} onDelete={onDelete} />
        <TextInput value={toDo} onChange={setToDo} />
        <Button label="추가" color="#304ffe" onClick={onCreate} />
      </Container>
    </>
  );
};

export default App;
