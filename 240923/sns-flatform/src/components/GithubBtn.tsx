import React from "react";
import {
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebas";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  width: 100%;
  background: #fff;
  color: #000;
  padding: 10px;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Logo = styled.img`
  height: 25px;
`;

const GithubBtn = () => {
  const nevigate = useNavigate();

  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      await signInWithPopup(auth, provider);
      nevigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button onClick={onClick}>
      <Logo src="/github-mark.svg" />
      Coutinue With GitHub
    </Button>
  );
};

export default GithubBtn;
