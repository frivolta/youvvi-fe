import React from "react";
import { fetchProfile, profileSelector } from "../app/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { ResumePreviewContainer } from "../container/SigninContainer/ResumePreviewContainer";

export const ResumePreviewPage = () => {
  const userProfile = useSelector(profileSelector);
  const dispatch = useDispatch();
  const education = userProfile.currentProfile.educations || [];
  const skillset = userProfile.currentProfile.skillsets || [];
  const workingExperiences =
    userProfile.currentProfile.workingExperiences || [];

  console.log(skillset);
  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <ResumePreviewContainer
      education={education}
      skillset={skillset}
      workingExperiences={workingExperiences}
    />
  );
};
