import { StyledIconActionContainer } from "./styled";

interface Props {
  icon: JSX.Element;
  action?: () => void;
  dataTestId?: string;
}

export const IconAction = ({ icon, action, dataTestId }: Props) => {
  return (
    <StyledIconActionContainer onClick={action} data-testid={dataTestId}>
      {icon}
    </StyledIconActionContainer>
  );
};
