import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  profileSelector,
} from "../../../app/profile/profileSlice";
import {
  Card,
  ErrorCard,
  IconAction,
  LoadingScreen,
} from "../../../components";
import { H2 } from "../../../styles";
import { CreateWorkingExperienceInput } from "../../../types/api.types";
import { WorkingExperience } from "../../../types/entities.types";
import { WorkingExperienceModal } from "./components";
import { AddNewWorkingExperienceIcon } from "./styled";

export const WorkingExperienceInfo = () => {
  const { isLoading, currentProfile, error } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [
    editingWorkingExperience,
    setEditingWorkingExperience,
  ] = React.useState<WorkingExperience | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleSetWorkingExperienceToEdit = (w: WorkingExperience) => {
    setIsModalOpen(true);
    setEditingWorkingExperience(w);
  };

  const handleCreateNewWorkingExperience = () => {
    setIsModalOpen(true);
    setEditingWorkingExperience(undefined);
  };

  const onEditOrCreateWorkingExperience = (
    updateEducationInput: CreateWorkingExperienceInput
  ) => {
    const isEditMode = !!editingWorkingExperience;
  };

  const pageContent = (
    <>
      <WorkingExperienceModal
        isOpen={isModalOpen}
        isEdit={!!editingWorkingExperience}
        editingWorkingExperience={editingWorkingExperience}
        handleOpen={() => setIsModalOpen(false)}
        handleEditOrCreate={onEditOrCreateWorkingExperience}
      />
      <Card margin="32px auto" inline>
        <H2>Your current working experiences</H2>
        <IconAction
          icon={<AddNewWorkingExperienceIcon />}
          action={handleCreateNewWorkingExperience}
          dataTestId="create-education-button"
        />
      </Card>
    </>
  );

  if (error.hasErrors) {
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
