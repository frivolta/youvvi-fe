import { Modal } from "../../../../../components";
import { CreateWorkingExperienceInput } from "../../../../../types/api.types";
import { WorkingExperience } from "../../../../../types/entities.types";
import { EducationForm } from "./components";

interface Props {
  isOpen: boolean;
  isEdit?: boolean;
  handleOpen: () => void;
  editingWorkingExperience?: WorkingExperience;
  handleEditOrCreate: (
    updateWorkingExperienceInput: CreateWorkingExperienceInput
  ) => void;
}

export const WorkingExperienceModal = ({
  isOpen = false,
  isEdit = false,
  handleOpen,
  editingWorkingExperience,
  handleEditOrCreate,
}: Props) => {
  return (
    <Modal isOpen={isOpen} handleOpen={handleOpen}>
      <EducationForm
        isEdit={isEdit}
        editingWorkingExperience={editingWorkingExperience}
        handleSubmitForm={handleEditOrCreate}
      />
    </Modal>
  );
};
