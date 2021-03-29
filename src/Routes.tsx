import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { EducationPage } from "./pages/education";
import { GeneralPage } from "./pages/general";
import { PersonalSkillsPage } from "./pages/personalSkills";
import { ResumePreviewPage } from "./pages/resumePreviewPage";
import { SigninPage } from "./pages/signin";
import { WorkingExperiencesPage } from "./pages/workingExperiences";

//Routes components
export const Routes: React.FC = () => {
  return (
    <>
      <PrivateRoute exact path="/" component={ResumePreviewPage} />
      <Route exact path="/signin" component={SigninPage} />
      <PrivateRoute exact path="/preview" component={ResumePreviewPage} />
      <PrivateRoute exact path="/general" component={GeneralPage} />
      <PrivateRoute exact path="/education" component={EducationPage} />
      <PrivateRoute exact path="/working-experiences" component={WorkingExperiencesPage} />
      <PrivateRoute exact path="/personal-skills" component={PersonalSkillsPage} />
    </>
  );
};
