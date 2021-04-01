import { truncateString } from "../../../../../app/helpers/truncate";
import { Card, IconAction } from "../../../../../components";
import { H5 } from "../../../../../styles";
import { Education } from "../../../../../types/entities.types";
import {
  DeleteEducationIcon,
  EditEducationIcon,
  StyledEducationActionContainer,
  StyledEducationCardContent,
} from "./styled";

interface Props {
  educations?: Education[];
  handleEditAction: (education: Education) => void;
  handleDeleteAction: (id: number) => void;
}

export const EducationList = ({
  educations,
  handleEditAction,
  handleDeleteAction,
}: Props) => {
  const educationElement = (education: Education) => {
    return (
      <Card
        key={education.id}
        margin="8px auto"
        testId={`education-${education.title}`}
      >
        <StyledEducationCardContent>
          <H5>{truncateString(education.title, 50)}</H5>
          <StyledEducationActionContainer>
            <IconAction
              icon={<EditEducationIcon />}
              action={() => handleEditAction(education)}
              dataTestId="edit-education-button"
            />
            <IconAction
              icon={<DeleteEducationIcon />}
              action={() => handleDeleteAction(education.id)}
              dataTestId="delete-education-button"
            />
          </StyledEducationActionContainer>
        </StyledEducationCardContent>
      </Card>
    );
  };

  return (
    <>
      {educations ? (
        educations.map((ed) => educationElement(ed))
      ) : (
        <p>You currently don't have any education...</p>
      )}
    </>
  );
};
