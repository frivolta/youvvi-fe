import styled from "styled-components";
import Modal from "styled-react-modal";
import { RiEyeCloseLine } from "react-icons/ri";
import { spaceUnit } from "../../styles";

export const StyledModal = styled(Modal)`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.componentBackground};
  transition: all 0.5s ease-in-out;
`;

export const StyledModalContainer = styled.div`
  display: flex;
  width: 50%;
  padding: ${spaceUnit}px;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius.base};
  background-color: ${(props) => props.theme.colors.componentBackground};
`;

export const StyledModalCloseWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  padding: ${(props) => props.theme.space.m};
`;

export const StyledModalClose = styled(RiEyeCloseLine)`
  color: ${(props) => props.theme.colors.primary};
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.wants};
    transition: color 0.3s ease-out;
  }
`;

export const StyledModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
