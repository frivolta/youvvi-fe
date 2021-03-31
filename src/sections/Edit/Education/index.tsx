import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfile,
  profileSelector,
} from "../../../app/profile/profileSlice";
import { LoadingScreen } from "../../../components";
import { Education } from "../../../types/entities.types";
import { EducationForm, EducationList } from "./components";
import { EducationModal } from "./components/EducationModal";

export const EducationInfo = () => {
  const { isLoading, currentProfile } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [editingEducation, setEditingEducation] = React.useState<
    Education | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const pageContent = (
    <>
      <EducationModal
        isOpen={isModalOpen}
        isEdit={false}
        handleOpen={() => setIsModalOpen(false)}
      />
      <EducationForm
        editingEducation={editingEducation}
        handleResetEducation={() => setEditingEducation(undefined)}
      />
      {currentProfile.educations ? (
        <EducationList
          educations={currentProfile.educations}
          handleEditAction={setEditingEducation}
        />
      ) : null}
    </>
  );

  return !isLoading ? (
    pageContent
  ) : (
    <LoadingScreen loadingText="Loading your profile" />
  );
};
