import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  padding: 10px 30px;
  cursor: pointer;
  min-width: 170px;
  transition: all 0.3s;
  ${({ $type }) =>
    $type === "line"
      ? `background: #fff; color: var(--main-purple);
      border: 2px solid var(--main-purple);`
      : $type === "bg"
      ? `background: var(--main-purple); color: #fff; 
      border: 1px solid var(--main-purple);`
      : `background: #ddd; border: 1px solid #ddd`}
  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ type, onClick, text }) => {
  return (
    <div>
      <ButtonStyle $type={type} onClick={onClick} text={text || "button"}>
        {text}
      </ButtonStyle>
    </div>
  );
};

export default Button;
