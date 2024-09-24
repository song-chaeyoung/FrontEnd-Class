import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebas";

const Wrapper = styled.div`
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

const Title = styled.h1`
  font-size: 42px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
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

const Error = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 20px;
`;

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || name === "" || email === "" || password === "") return;

    try {
      // create an account
      // set the name of the user
      // redirect to the home page
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      // setErr()
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Log into 🍪</Title>
      <Form onSubmit={onSumbit}>
        <Input
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          placeholder="name"
          required
        />
        <Input
          onChange={onChange}
          type="email"
          name="email"
          value={email}
          placeholder="email"
          required
        />
        <Input
          onChange={onChange}
          type="password"
          name="password"
          value={password}
          placeholder="password"
          required
        />
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>
      {err !== "" ? <Error>{err}</Error> : null}
    </Wrapper>
  );
};

export default CreateAccount;
