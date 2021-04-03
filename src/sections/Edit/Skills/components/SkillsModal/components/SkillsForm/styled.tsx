import styled from "styled-components";
import {
  IoRemoveCircleSharp,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { rotate, scale } from "../../../../../../../styles/animations";

export const StyledSkillsForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.space.max};
`;

export const StyledSkillsFormInputContainer = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  flex-direction: row;
`;

export const StyledSkillsFormInput = styled.div`
  flex: 2;
  padding: 0 ${(props) => props.theme.space.m};
`;

export const StyledListItems = styled.div`
  padding: 0 ${(props) => props.theme.space.m};
  overflow: visible;
`;
export const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledListItemIcon = styled(IoRemoveCircleSharp)`
  color: ${(props) => props.theme.colors.primary};
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  margin-right: ${(props) => props.theme.space.m};
  &:hover {
    color: ${(props) => props.theme.colors.wants};
    transition: color 0.3s ease-out;
    animation: ${rotate} 2s linear infinite;
  }
`;

export const StyledSendIcon = styled(IoChevronForwardCircleOutline)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.wants};
    transition: color 0.3s ease-out;
    animation: ${scale} 0.2s ease-in forwards;
  }
`;
