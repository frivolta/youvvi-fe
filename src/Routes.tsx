import React from "react";
import { Route } from "react-router-dom";
import { SigninPage } from "./pages/signin";

//Routes components
export const Routes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={SigninPage} />
      <Route exact path="/signin" component={SigninPage} />
    </>
  );
};
