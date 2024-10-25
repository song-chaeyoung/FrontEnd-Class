import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* border: 1px solid #ccc; */
`;

const Label = styled.div`
  flex: 1;
`;

interface Props {
  label: string;
  onDelete?: () => void;
}

const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Button label="삭제" onClick={onDelete} />
    </Container>
  );
};

export default TodoItem;
