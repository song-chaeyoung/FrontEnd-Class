import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";


const layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default layout;
