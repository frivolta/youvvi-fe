import { IoAddCircleSharp } from "react-icons/io5";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AddNewSkillGroupIcon = styled(IoAddCircleSharp)`
  color: ${(props) => props.theme.colors.wants};
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: color 0.3s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    transition: color 0.3s ease-out;
    animation: ${rotate} 2s linear infinite;
  }
`;
