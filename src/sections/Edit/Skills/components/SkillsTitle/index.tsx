import { Card, IconAction } from "../../../../../components";
import { H2 } from "../../../../../styles";
import { AddNewSkillGroupIcon } from "./styled";

interface Props {
  handleCreateNewSkillset: () => void;
}

export const SkillsTitle = ({ handleCreateNewSkillset }: Props) => {
  return (
    <Card margin="32px auto" inline>
      <H2>Your current skills</H2>
      <IconAction
        icon={<AddNewSkillGroupIcon />}
        action={handleCreateNewSkillset}
        dataTestId="create-skill-group-button"
      />
    </Card>
  );
};
