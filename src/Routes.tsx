import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { ResumePreviewPage } from "./pages/resumePreviewPage";
import { SigninPage } from "./pages/signin";

//Routes components
export const Routes: React.FC = () => {
  return (
    <>
      <PrivateRoute exact path="/" component={ResumePreviewPage} />
      <Route exact path="/signin" component={SigninPage} />
      <PrivateRoute exact path="/preview" component={ResumePreviewPage} />
    </>
  );
};
