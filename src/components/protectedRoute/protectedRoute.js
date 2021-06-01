import React from "react";
import { Redirect } from "react-router-dom";

function protectedRoute(props) {
  const Component = props.component;
  const isAuthenticated = localStorage.getItem("authenticated");

  return isAuthenticated === "true" ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: "/login" }} />
  );
}

export default protectedRoute;
