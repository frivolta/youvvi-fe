import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSkillset, updateSkillset } from "../../../app/profile/actions";
import {
  fetchProfile,
  profileSelector,
} from "../../../app/profile/profileSlice";
import { ErrorCard, LoadingScreen } from "../../../components";
import { CreateSkillsetInput } from "../../../types/api.types";
import { Skillset } from "../../../types/entities.types";
import { SkillsList } from "./components/SkillsList";
import { SkillsModal } from "./components/SkillsModal";
import { SkillsTitle } from "./components/SkillsTitle";

export const SkillsInfo = () => {
  const { isLoading, currentProfile, error } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [editingSkillset, setEditingSkillset] = React.useState<
    Skillset | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleCreateNewSkillset = () => {
    setIsModalOpen(true);
    setEditingSkillset(undefined);
  };

  const handleSetSkillsetToEdit = (s: Skillset) => {
    setIsModalOpen(true);
    setEditingSkillset(s);
  };

  const onEditOrCreateSkillset = (updateSkillsetInput: CreateSkillsetInput) => {
    const isEditMode = !!editingSkillset;
    isEditMode && editingSkillset
      ? dispatch(
          updateSkillset({ id: editingSkillset.id, ...updateSkillsetInput })
        )
      : dispatch(updateSkillset(updateSkillsetInput));
    setIsModalOpen(false);
    setEditingSkillset(undefined);
  };

  const onDeleteSkill = (id: number) => {
    dispatch(deleteSkillset(id));
    setIsModalOpen(false);
  };

  console.log(currentProfile);

  const pageContent = (
    <>
      <SkillsModal
        isOpen={isModalOpen}
        isEdit={!!editingSkillset}
        editingSkillset={editingSkillset}
        handleOpen={() => setIsModalOpen(false)}
        handleEditOrCreate={onEditOrCreateSkillset}
      />
      <SkillsTitle handleCreateNewSkillset={handleCreateNewSkillset} />
      <SkillsList
        skillsets={currentProfile?.skillsets || []}
        handleEditAction={handleSetSkillsetToEdit}
        handleDeleteAction={onDeleteSkill}
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
