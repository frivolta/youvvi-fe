import { Modal } from "../../../../../components";
import { CreateSkillsetInput } from "../../../../../types/api.types";
import { Skillset } from "../../../../../types/entities.types";
import { SkillsForm } from "./components";

interface Props {
  isOpen: boolean;
  isEdit?: boolean;
  handleOpen: () => void;
  editingSkillset?: Skillset;
  handleEditOrCreate: (updateSkillsInput: CreateSkillsetInput) => void;
}

export const SkillsModal = ({
  isOpen = false,
  isEdit = false,
  handleOpen,
  editingSkillset,
  handleEditOrCreate,
}: Props) => {
  return (
    <Modal isOpen={isOpen} handleOpen={handleOpen}>
      <SkillsForm
        isEdit={isEdit}
        editingSkillset={editingSkillset}
        handleSubmitForm={handleEditOrCreate}
      />
    </Modal>
  );
};
