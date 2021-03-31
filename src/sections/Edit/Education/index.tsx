import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEducation, updateEducation } from "../../../app/profile/actions";
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
import { CreateEducationInput } from "../../../types/api.types";
import { Education } from "../../../types/entities.types";
import { EducationList } from "./components";
import { EducationModal } from "./components/EducationModal";
import { AddNewEducationIcon } from "./styled";

export const EducationInfo = () => {
  const { isLoading, currentProfile, error } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [editingEducation, setEditingEducation] = React.useState<
    Education | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  //State setters
  const handleSetEducationToEdit = (e: Education) => {
    setIsModalOpen(true);
    setEditingEducation(e);
  };

  const handleCreateNewEducation = () => {
    setIsModalOpen(true);
    setEditingEducation(undefined);
  };

  const onEditOrCreateEducation = (
    updateEducationInput: CreateEducationInput
  ) => {
    const isEditMode = !!editingEducation;
    isEditMode && editingEducation
      ? dispatch(
          updateEducation({ id: editingEducation.id, ...updateEducationInput })
        )
      : dispatch(updateEducation(updateEducationInput));
    setIsModalOpen(false);
    setEditingEducation(undefined);
  };

  const onDeleteEducation = (id: number) => {
    dispatch(deleteEducation(id));
    setIsModalOpen(false);
  };

  const pageContent = (
    <>
      <EducationModal
        isOpen={isModalOpen}
        isEdit={!!editingEducation}
        editingEducation={editingEducation}
        handleOpen={() => setIsModalOpen(false)}
        handleEditOrCreate={onEditOrCreateEducation}
      />
      <Card margin="32px auto" inline>
        <H2>Your current education titles</H2>
        <IconAction
          icon={<AddNewEducationIcon />}
          action={handleCreateNewEducation}
        />
      </Card>
      <EducationList
        educations={currentProfile?.educations || []}
        handleEditAction={handleSetEducationToEdit}
        handleDeleteAction={onDeleteEducation}
      />
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
