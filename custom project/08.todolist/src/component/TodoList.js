import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 20px 0 50px;
`;

const TextInput = styled.input`
  flex: 3;
  padding: 10px;
  border: none;
  border-bottom: 1px solid var(--main-purple);
  /* border-radius: 10px; */
  font-size: 18px;
  &::placeholder {
    opacity: 0.8;
    transition: all 0.5s;
  }
  &:focus {
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }
`;

const SubmitInput = styled.input`
  flex: 1;
  background: #fff;
  border: none;
  border: 1px solid var(--main-purple);
  border-radius: 10px;
  color: var(--main-purple);
  font-size: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background: var(--main-purple);
    color: #fff;
  }
`;

const TodoList = ({ todo = [], onUpdateContent, onToggleCheck, onDelete }) => {
  const [search, setSearch] = useState("");
  const searchEvent = (e) => {
    setSearch(e.target.value);
  };
  const getSEarchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div>
      <Wrapper>
        <TextInput
          type="text"
          placeholder="Search note"
          onChange={searchEvent}
        />
        <SubmitInput type="submit" value={"Search"} />
      </Wrapper>
      {getSEarchResult().map((it) => (
        <TodoItem
          key={it.id}
          onUpdateContent={onUpdateContent}
          onToggleCheck={onToggleCheck}
          onDelete={onDelete}
          {...it}
        />
      ))}
    </div>
  );
};

export default TodoList;
