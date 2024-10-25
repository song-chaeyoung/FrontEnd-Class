import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  background: skyblue;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.4);
  }
`;

interface Props {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
