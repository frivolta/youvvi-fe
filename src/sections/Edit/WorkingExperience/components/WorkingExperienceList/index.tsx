import { truncateString } from "../../../../../app/helpers/truncate";
import { Card, IconAction } from "../../../../../components";
import { H5 } from "../../../../../styles";
import { WorkingExperience } from "../../../../../types/entities.types";
import {
  DeleteWorkingExperienceIcon,
  EditWorkingExperienceIcon,
  StyledWorkingExperienceActionContainer,
  StyledWorkingExperienceCardContent,
} from "./styled";

interface Props {
  workingExperiences?: WorkingExperience[];
  handleEditAction: (workingExperience: WorkingExperience) => void;
  handleDeleteAction: (id: number) => void;
}

export const WorkingExperienceList = ({
  workingExperiences,
  handleEditAction,
  handleDeleteAction,
}: Props) => {
  const workingExperienceElement = (workingExperience: WorkingExperience) => {
    return (
      <Card
        key={workingExperience.id}
        margin="8px auto"
        testId={`workingExperience-${workingExperience.title}`}
      >
        <StyledWorkingExperienceCardContent>
          <H5>{truncateString(workingExperience.title, 50)}</H5>
          <StyledWorkingExperienceActionContainer>
            <IconAction
              icon={<EditWorkingExperienceIcon />}
              action={() => handleEditAction(workingExperience)}
              dataTestId="edit-workingExperience-button"
            />
            <IconAction
              icon={<DeleteWorkingExperienceIcon />}
              action={() => handleDeleteAction(workingExperience.id)}
              dataTestId="delete-workingExperience-button"
            />
          </StyledWorkingExperienceActionContainer>
        </StyledWorkingExperienceCardContent>
      </Card>
    );
  };

  return (
    <>
      {workingExperiences ? (
        workingExperiences.map((ed) => workingExperienceElement(ed))
      ) : (
        <p>You currently don't have any working experience...</p>
      )}
    </>
  );
};
