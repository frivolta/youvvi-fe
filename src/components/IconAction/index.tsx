import { StyledIconActionContainer } from "./styled";

interface Props {
  icon: JSX.Element;
  action?: () => void;
}

export const IconAction = ({ icon, action }: Props) => {
  return (
    <StyledIconActionContainer onClick={action}>
      {icon}
    </StyledIconActionContainer>
  );
};
