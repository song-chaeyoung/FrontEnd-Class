import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebas";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;

  console.log(user);
  if (user === null) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
