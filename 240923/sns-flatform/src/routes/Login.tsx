import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebas";
import { FirebaseError } from "firebase/app";
import {
  Form,
  Input,
  Switcher,
  Title,
  Wrapper,
  Error,
} from "../components/auth-components";
import GithubBtn from "../components/GithubBtn";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nevigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading || email === "" || password === "") return;

    try {
      setIsLoading(true);

      await signInWithEmailAndPassword(auth, email, password);
      alert("로그인을 환영합니다.");
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
      <Title>Log in 🍀</Title>
      <Form onSubmit={onSumbit}>
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
        <Input type="submit" value={isLoading ? "Loading..." : "Log In"} />
      </Form>
      <Switcher>
        Don't you have an account?
        <Link to={"/createaccout"}>Create one &rarr;</Link>
      </Switcher>
      <GithubBtn />
      {err !== "" ? <Error>{err}</Error> : null}
    </Wrapper>
  );
};

export default Login;
