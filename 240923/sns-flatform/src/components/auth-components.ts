import styled from "styled-components";

export const Wrapper = styled.div`
  width: 420px;
  height: 100%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Title = styled.h1`
  font-size: 42px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  &[type="submit"] {
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 20px;
`;

export const Switcher = styled.span`
  a {
    margin-left: 10px;
    color: #1d9bf0;
    cursor: pointer;
  }
`;
