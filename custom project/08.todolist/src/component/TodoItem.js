import React, { useContext, useState } from "react";
import styled from "styled-components";
import { TodoDispatchContext } from "../App";
import { faL } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 10px;
  border-bottom: 1px solid var(--main-purple);
  background: ${({ isActive }) => (isActive ? "yellow" : "")};
`;

const CheckInput = styled.input`
  display: none;
  &:checked ~ label {
    background: var(--main-purple);
    i {
      display: block;
    }
  }
`;

const CheckLabel = styled.label`
  width: 26px;
  height: 26px;
  border: 1px solid var(--main-purple);
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  i {
    font-size: 16px;
    color: #fff;
    display: none;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const EditInputWarpper = styled.div`
  flex: 4;
  display: flex;
  gap: 20px;
`;

const EditInput = styled.input`
  width: 80%;
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const EditBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 4px 12px;
  cursor: pointer;
`;

const Content = styled.p`
  flex: 4;
  padding: 0 10px;
  font-size: 17px;
`;

const Date = styled.p`
  font-size: 13px;
  color: #666;
  margin-right: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.span`
  font-size: 15px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.6;
  }
`;

const TodoItem = ({
  id,
  content,
  date,
  isChecked,
  onToggleCheck,
  onUpdateContent,
  onDelete,
}) => {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(content);

  const editMode = () => {
    setEdit(true);
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const textEdit = () => {
    onUpdateContent(id, text);
    setEdit(false);
  };

  const checkChange = () => {
    onToggleCheck(id);
  };

  const deleteItem = () => {
    onDelete(id);
  };

  return (
    <Wrapper>
      <CheckInput
        type="checkbox"
        id={`${id}checkbox`}
        name={`${id}checkbox`}
        checked={isChecked}
        onChange={checkChange}
      />
      <CheckLabel htmlFor={`${id}checkbox`}>
        <i className="fa-solid fa-check"></i>
      </CheckLabel>
      {edit ? (
        <EditInputWarpper>
          <EditInput onChange={textChange} type="text" value={text} />
          <EditBtn onClick={textEdit}>수정</EditBtn>
        </EditInputWarpper>
      ) : null}
      {!edit ? <Content>{content}</Content> : null}
      <Date>{date}</Date>
      <IconWrapper>
        <Icon onClick={editMode}>
          <i className="fa-regular fa-pen-to-square"></i>
        </Icon>
        <Icon onClick={deleteItem}>
          <i className="fa-regular fa-trash-can"></i>
        </Icon>
      </IconWrapper>
    </Wrapper>
  );
};

export default TodoItem;
