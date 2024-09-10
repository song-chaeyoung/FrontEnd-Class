import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  margin-bottom: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({ title, onClick }) => {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
};

export default Button;
