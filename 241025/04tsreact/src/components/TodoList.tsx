import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* align-items: end; */
`;

interface Props {
  toDoList: Array<string>;
  onDelete?: (todo: string) => void;
}

const TodoList = ({ toDoList, onDelete }: Props) => {
  return (
    <Container>
      {toDoList.map((item, idx) => (
        <TodoItem
          key={idx}
          label={item}
          onDelete={() => {
            if (typeof onDelete === "function") onDelete(item);
          }}
        />
      ))}
    </Container>
  );
};

export default TodoList;
