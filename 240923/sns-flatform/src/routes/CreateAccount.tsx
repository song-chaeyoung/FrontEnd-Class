import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebas";
import { update } from "firebase/database";
import { FirebaseError } from "firebase/app";
import {
  Form,
  Input,
  Title,
  Wrapper,
  Error,
} from "../components/auth-components";

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

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
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      });

      nevigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setErr(e.message);
      }
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
