import { truncateString } from "../../../../../app/helpers/truncate";
import { Card, IconAction } from "../../../../../components";
import { H5 } from "../../../../../styles";
import { Skillset } from "../../../../../types/entities.types";
import {
  StyledEducationActionContainer,
  StyledEducationCardContent,
} from "../../../Education/components/EducationList/styled";
import { DeleteSkillsIcon, EditSkillsIcon } from "./styled";

interface Props {
  skillsets?: Skillset[];
  handleEditAction: (skillset: Skillset) => void;
  handleDeleteAction: (id: number) => void;
}

export const SkillsList = ({
  skillsets,
  handleEditAction,
  handleDeleteAction,
}: Props) => {
  console.log("skillsets", skillsets);
  const skillsetElement = (skillset: Skillset) => {
    return (
      <Card
        key={skillset.id}
        margin="8px auto"
        testId={`skillset-${skillset.title}`}
      >
        <StyledEducationCardContent>
          <H5>{truncateString(skillset.title, 50)}</H5>
          <StyledEducationActionContainer>
            <IconAction
              icon={<EditSkillsIcon />}
              action={() => handleEditAction(skillset)}
              dataTestId="edit-skillset-button"
            />
            <IconAction
              icon={<DeleteSkillsIcon />}
              action={() => handleDeleteAction(skillset.id)}
              dataTestId="delete-skillset-button"
            />
          </StyledEducationActionContainer>
        </StyledEducationCardContent>
      </Card>
    );
  };

  return (
    <>
      {skillsets ? (
        skillsets.map((s) => skillsetElement(s))
      ) : (
        <p>You currently don't have any skillset...</p>
      )}
    </>
  );
};
