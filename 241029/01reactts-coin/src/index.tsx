import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./Router";
import { RecoilRoot } from "recoil";

const quertClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={quertClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>
);
