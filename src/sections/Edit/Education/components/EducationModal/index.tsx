import { Modal } from "../../../../../components";

interface Props {
  isOpen: boolean;
  isEdit?: boolean;
  handleOpen: () => void;
}

export const EducationModal = ({
  isOpen = false,
  isEdit = false,
  handleOpen,
}: Props) => {
  function closeModal() {
    handleOpen();
  }
  return (
    <Modal isOpen={isOpen} handleOpen={handleOpen}>
      <p>close</p>
    </Modal>
  );
};
