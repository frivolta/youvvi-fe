import { Modal } from "../../../../../components";
import { CreateEducationInput } from "../../../../../types/api.types";
import { Education } from "../../../../../types/entities.types";
import { EducationForm } from "./components";

export type EditEducationFields = Pick<
  Education,
  "title" | "institute" | "startYear" | "endYear"
>;

interface Props {
  isOpen: boolean;
  isEdit?: boolean;
  handleOpen: () => void;
  editingEducation?: Education;
  handleEditOrCreate: (updateEducationInput: CreateEducationInput) => void;
}

export const EducationModal = ({
  isOpen = false,
  isEdit = false,
  handleOpen,
  editingEducation,
  handleEditOrCreate,
}: Props) => {
  return (
    <Modal isOpen={isOpen} handleOpen={handleOpen}>
      <EducationForm
        isEdit={isEdit}
        editingEducation={editingEducation}
        handleSubmitForm={handleEditOrCreate}
      />
    </Modal>
  );
};
