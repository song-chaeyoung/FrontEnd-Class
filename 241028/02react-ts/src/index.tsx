import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App1 from "./App1";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

// const darkTheme: DefaultTheme = {
//   textColor: "#fff",
//   bgColor: "#000",
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider theme={darkTheme}>
    <App1 />
  </ThemeProvider>
);
