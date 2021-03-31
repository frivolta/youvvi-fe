import {
  StyledModal,
  StyledModalClose,
  StyledModalCloseWrapper,
  StyledModalContainer,
  StyledModalContentWrapper,
} from "./styled";

interface Props {
  isOpen: boolean;
  handleOpen: () => void;
  children: React.ReactElement;
}

export const Modal = ({ isOpen = false, handleOpen, children }: Props) => {
  function closeModal() {
    handleOpen();
  }
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <StyledModalContainer>
        <StyledModalCloseWrapper>
          <StyledModalClose onClick={closeModal} />
        </StyledModalCloseWrapper>
        <StyledModalContentWrapper>{children}</StyledModalContentWrapper>
      </StyledModalContainer>
    </StyledModal>
  );
};
