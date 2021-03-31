import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  profileSelector,
  updateProfile,
} from "../../../app/profile/profileSlice";
import { ErrorCard, LoadingScreen } from "../../../components";
import { Profile } from "../../../types/entities.types";
import {
  BottomNotesForm,
  ContactInfoForm,
  GeneralInfoForm,
} from "./components";

export const GeneralInfo = () => {
  const { isLoading, currentProfile, error } = useSelector(profileSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleUpdateProfile = (updatedInformations: Partial<Profile>) => {
    const updatedProfile: Partial<Profile> = {
      id: currentProfile.profile?.id || undefined,
      name: currentProfile.profile?.name || "John Doe",
      workTitle: currentProfile.profile?.workTitle || "No work title",
      ...updatedInformations,
    };
    dispatch(updateProfile({ ...updatedProfile }));
  };

  const pageContent = (
    <>
      <GeneralInfoForm
        name={currentProfile.profile?.name || null}
        photoUrl={currentProfile.profile?.photoUrl}
        workTitle={currentProfile.profile?.workTitle || null}
        biography={currentProfile.profile?.biography}
        handleUpdateProfile={handleUpdateProfile}
      />
      <ContactInfoForm
        website={currentProfile.profile?.website}
        phone={currentProfile.profile?.phone}
        email={currentProfile.profile?.email}
        handleUpdateProfile={handleUpdateProfile}
      />
      <BottomNotesForm
        bottomNotes={currentProfile.profile?.bottomNotes}
        handleUpdateProfile={handleUpdateProfile}
      />
    </>
  );

  if (error) {
    return (
      <ErrorCard
        errorMessage={error.message || "There was an error loading the page"}
      />
    );
  }

  return !isLoading ? (
    pageContent
  ) : (
    <LoadingScreen loadingText="Loading your profile" />
  );
};
