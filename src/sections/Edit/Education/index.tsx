import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEducation, updateEducation } from "../../../app/profile/actions";
import {
  fetchProfile,
  profileSelector,
} from "../../../app/profile/profileSlice";
import { Card, IconAction, LoadingScreen } from "../../../components";
import { H2 } from "../../../styles";
import {
  CreateEducationInput,
  EditEducationInput,
} from "../../../types/api.types";
import { Education } from "../../../types/entities.types";
import { EducationList } from "./components";
import { EducationModal } from "./components/EducationModal";
import { AddNewEducationIcon } from "./styled";

export const EducationInfo = () => {
  const { isLoading, currentProfile } = useSelector(profileSelector);
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

  // If Edit is clicked, check if editing education exists, if so take the id from the action and add the updated fields otherwise create a new oneOf

  // If delete education is clicked dispatch a delete action with the editing education id

  const pageContent = (
    <>
      <EducationModal
        isOpen={isModalOpen}
        isEdit={!!editingEducation}
        editingEducation={editingEducation}
        handleOpen={() => setIsModalOpen(false)}
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
        handleDeleteAction={handleSetEducationToEdit}
      />
    </>
  );

  return !isLoading ? (
    pageContent
  ) : (
    <LoadingScreen loadingText="Loading your profile" />
  );
};
