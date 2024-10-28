import React, { useState } from "react";
import styled from "styled-components";

const Contanier = styled.div<CircleProps>`
  background: ${({ bgColor }) => bgColor};
  width: 200px;
  height: 200px;
  border: 5px solid ${({ borderColor }) => borderColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  text?: string;
  borderColor?: string;
}

const Circle = ({ bgColor, text = "Wrold!", borderColor }: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  // setCounter("JS");

  return (
    <Contanier bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text} {counter}
    </Contanier>
  );
};

export default Circle;
