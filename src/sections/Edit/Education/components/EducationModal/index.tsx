import { Modal } from "../../../../../components";
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
}

export const EducationModal = ({
  isOpen = false,
  isEdit = false,
  handleOpen,
  editingEducation,
}: Props) => {
  const handleSubmitForm = (editedEducation: EditEducationFields) => {
    return console.log(isEdit ? `Editing` : `creating`);
  };

  return (
    <Modal isOpen={isOpen} handleOpen={handleOpen}>
      <EducationForm
        isEdit={isEdit}
        editingEducation={editingEducation}
        handleSubmitForm={handleSubmitForm}
      />
    </Modal>
  );
};
