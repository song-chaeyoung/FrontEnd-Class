import React from "react";
import { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: "Source Sans 3", sans-serif;
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

const Root = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Outlet />
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      </ThemeProvider>
    </>
  );
};

export default Root;
