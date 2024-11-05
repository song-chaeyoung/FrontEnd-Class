import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Outlet } from "react-router-dom";
import theme from "./theme";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: "Source Sans 3", serif;
  }
`;

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default Root;
