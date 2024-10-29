import React from "react";
import ReactDOM from "react-dom/client";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import router from "./Router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
