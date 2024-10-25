import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface Props {
  counter: number;
}

const Label = ({ counter }: Props) => {
  return <Container>{counter}</Container>;
};

export default Label;
