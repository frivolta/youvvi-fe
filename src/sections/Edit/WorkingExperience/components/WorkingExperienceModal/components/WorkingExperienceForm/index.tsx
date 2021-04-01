import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input } from "../../../../../../../components";
import { H2 } from "../../../../../../../styles";
import { WorkingExperience } from "../../../../../../../types/entities.types";
import {
  StyledWorkingExperienceForm,
  StyledWorkingExperienceFormInput,
  StyledWorkingExperienceFormInputContainer,
} from "./styled";

interface Props {
  isEdit: boolean;
  editingWorkingExperience?: WorkingExperience;
  handleSubmitForm: (
    updateWorkingExperienceInput: CreateWorkingExperienceInput
  ) => void;
}

const WorkingExperienceSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too short").max(50, "Too long").required(),
  position: Yup.string().min(2, "Too short").max(50, "Too long").required(),
  startDate: Yup.string().min(2, "Too short").max(10, "Too long").required(),
  endDate: Yup.string().min(2, "Too short").max(10, "Too long").nullable(),
  isActual: Yup.boolean().nullable(),
  description: Yup.string().min(2, "Too short").max(250, "Too long").nullable(),
});

// Form data interface
interface CreateWorkingExperienceInput {
  title: string;
  position: string;
  startDate: string;
  endDate?: string;
  isActual: boolean;
  description?: string;
}

export const WorkingExperienceForm = ({
  editingWorkingExperience,
  handleSubmitForm,
}: Props) => {
  const formik = useFormik<CreateWorkingExperienceInput>({
    initialValues: {
      title: editingWorkingExperience?.title || "",
      position: editingWorkingExperience?.position || "",
      startDate: editingWorkingExperience?.startDate || "",
      endDate: editingWorkingExperience?.endDate || "",
      isActual: editingWorkingExperience?.isActual || false,
      description: editingWorkingExperience?.description || "",
    },
    enableReinitialize: true,
    validationSchema: WorkingExperienceSchema,
    onSubmit: async ({ title, position, startDate, endDate, description }) => {
      handleSubmitForm({
        title,
        position,
        startDate,
        endDate,
        isActual: false,
        description,
      });
    },
  });
  const workingExperienceForm = (
    <form onSubmit={formik.handleSubmit} data-testid="addEducationForm">
      <StyledWorkingExperienceFormInputContainer>
        <StyledWorkingExperienceFormInput>
          <Input
            name="title"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.title}
            type="text"
            placeholder="Agency name"
            hasErrors={
              formik.touched.title && formik.errors.title ? true : false
            }
            errorMessage={formik.errors.title}
          />
        </StyledWorkingExperienceFormInput>
      </StyledWorkingExperienceFormInputContainer>
      <StyledWorkingExperienceFormInputContainer>
        <StyledWorkingExperienceFormInput>
          <Input
            name="position"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.position}
            type="text"
            placeholder="Front-end Developer"
            hasErrors={
              formik.touched.position && formik.errors.position ? true : false
            }
            errorMessage={formik.errors.position}
          />
        </StyledWorkingExperienceFormInput>
      </StyledWorkingExperienceFormInputContainer>
      <StyledWorkingExperienceFormInputContainer>
        <StyledWorkingExperienceFormInput>
          <Input
            name="startDate"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.startDate}
            type="text"
            placeholder="Mar 2015"
            hasErrors={
              formik.touched.startDate && formik.errors.startDate ? true : false
            }
            errorMessage={formik.errors.startDate}
          />
        </StyledWorkingExperienceFormInput>
        <StyledWorkingExperienceFormInput>
          <Input
            name="endDate"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.endDate}
            type="text"
            placeholder="Aug 2020 (or Now)"
            hasErrors={
              formik.touched.endDate && formik.errors.endDate ? true : false
            }
            errorMessage={formik.errors.endDate}
          />
        </StyledWorkingExperienceFormInput>
      </StyledWorkingExperienceFormInputContainer>
      <StyledWorkingExperienceFormInputContainer>
        <StyledWorkingExperienceFormInput>
          <Input
            name="description"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.description}
            type="text"
            placeholder="Description..."
            hasErrors={
              formik.touched.description && formik.errors.description
                ? true
                : false
            }
            errorMessage={formik.errors.description}
          />
        </StyledWorkingExperienceFormInput>
      </StyledWorkingExperienceFormInputContainer>
      <Button
        margin="32px 0"
        text="Create"
        disabled={!formik.isValid || !formik.dirty}
      />
    </form>
  );

  const educationFormContainer = (
    <StyledWorkingExperienceForm>
      <H2>Create Working Experience</H2>
      {workingExperienceForm}
    </StyledWorkingExperienceForm>
  );

  return educationFormContainer;
};
