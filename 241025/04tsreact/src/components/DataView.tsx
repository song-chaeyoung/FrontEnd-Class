import React from "react";
import Title from "./Title";
import TodoList from "./TodoList";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background: #fff;
  padding: 32px;
  border-radius: 8px;
`;

interface Props {
  todoList: Array<string>;
  onDelete: (todo: string) => void;
}

const DataView = ({ todoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label={"Todo List 🥳"} />
      <TodoList toDoList={todoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
