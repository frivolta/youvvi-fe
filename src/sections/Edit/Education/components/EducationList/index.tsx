import { Button, Card } from "../../../../../components";
import { H2, H5 } from "../../../../../styles";
import { Education } from "../../../../../types/entities.types";

interface Props {
  educations: Education[];
  handleEditAction: (education: Education) => void;
}

// Form data interface
interface CreateEducationFormInputs {
  title: string;
  institute: string;
  startYear: string;
  endYear: string;
}

export const EducationList = ({ educations, handleEditAction }: Props) => {
  const educationElement = (education: Education) => {
    return (
      <Card key={education.id} size="small">
        <H5>{education.title}</H5>
        <Button
          text="Edit"
          secondary
          handleClick={() => handleEditAction(education)}
        />
      </Card>
    );
  };

  return (
    <Card margin="32px auto">
      <H2>Your current education titles</H2>
      {educations.map((ed) => educationElement(ed))}
    </Card>
  );
};
