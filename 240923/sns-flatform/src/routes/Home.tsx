import React from "react";
import { auth } from "../firebas";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nevigate = useNavigate();

  const logout = () => {
    auth.signOut();
    nevigate("/login");
  };

  return (
    <h1>
      <button onClick={logout}>Log out</button>
    </h1>
  );
};

export default Home;
