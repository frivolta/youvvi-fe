import { Modal } from "../../../../../components";
import { CreateWorkingExperienceInput } from "../../../../../types/api.types";
import { WorkingExperience } from "../../../../../types/entities.types";
import { WorkingExperienceForm } from "./components";

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
      <WorkingExperienceForm
        isEdit={isEdit}
        editingWorkingExperience={editingWorkingExperience}
        handleSubmitForm={handleEditOrCreate}
      />
    </Modal>
  );
};
