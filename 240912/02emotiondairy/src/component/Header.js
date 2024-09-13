import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const LeftChild = styled.div``;
const Title = styled.div`
  font-size: 25px;
`;
const RightChild = styled.div``;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      <LeftChild>{leftChild}</LeftChild>
      <Title>{title}</Title>
      <RightChild>{rightChild}</RightChild>
    </Wrapper>
  );
};

export default Header;
