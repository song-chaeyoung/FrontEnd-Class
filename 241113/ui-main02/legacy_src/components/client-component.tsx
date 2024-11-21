"use-client";
import React, { ReactNode } from "react";
// import ServerComponent from "./server-component";

const ClientComponent = ({ children }: { children: ReactNode }) => {
  console.log("클라이언트 컴포넌트");
  return <>{children}</>;
};

export default ClientComponent;
