import React from "react";
import { fetchProfile, profileSelector } from "../app/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { ResumePreviewContainer } from "../sections/SigninContainer/ResumePreview";
import { sortEntities } from "../app/helpers/sort";

export const ResumePreviewPage = () => {
  const userProfile = useSelector(profileSelector);
  const dispatch = useDispatch();
  const education = userProfile.currentProfile.educations || [];
  const skillset = userProfile.currentProfile.skillsets || [];
  const workingExperiences =
    userProfile.currentProfile.workingExperiences || [];
  const profileInfos = userProfile.currentProfile.profile;

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  return (
    <ResumePreviewContainer
      education={education}
      skillset={skillset}
      workingExperiences={sortEntities(workingExperiences)}
      profileInfos={profileInfos}
    />
  );
};
