import styled from "styled-components";
import {
  IoCloseCircleSharp,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

export const StyledEducationCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledEducationActionContainer = styled.div`
  display: flex;
`;

export const EditEducationIcon = styled(IoChevronForwardCircleOutline)`
  color: ${(props) => props.theme.colors.primary};
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  padding: ${(props) => props.theme.space.s};
  &:hover {
    color: ${(props) => props.theme.colors.wants};
    transition: color 0.3s ease-out;
  }
`;

export const DeleteEducationIcon = styled(IoCloseCircleSharp)`
  color: ${(props) => props.theme.colors.wants};
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  padding: ${(props) => props.theme.space.s};
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.3s ease-out;
  }
`;
