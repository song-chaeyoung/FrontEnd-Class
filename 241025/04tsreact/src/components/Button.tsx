import React from "react";
import styled from "styled-components";

interface ContainerProps {
  color: string;
}

const Btn = styled.button<ContainerProps>`
  /* flex: 1; */
  border: none;
  border-radius: 8px;
  /* background: rgb(255, 87, 34); */
  background: ${({ color }) => color};
  color: #fff;
  padding: 8px 15px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${({ color }) => color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.4);
  }
`;

interface Props {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Button = ({ label, color = "#ff5722", onClick }: Props) => {
  return (
    <Btn color={color} onClick={onClick}>
      {label}
    </Btn>
  );
};

export default Button;
