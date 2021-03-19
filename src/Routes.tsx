import axios from "axios";
import React from "react";
import { Route } from "react-router-dom";
import { apiAddress } from "./api";
import { useAuth } from "./context/useAuthContext";
import { ResumePreviewPage } from "./pages/resumePreviewPage";
import { SigninPage } from "./pages/signin";
import { EducationOutput } from "./types/api.types";

//Routes components
export const Routes: React.FC = () => {
  return (
    <>
      <Route exact path="/" component={SigninPage} />
      <Route exact path="/signin" component={SigninPage} />
      <Route exact path="/preview" component={ResumePreviewPage} />
    </>
  );
};
