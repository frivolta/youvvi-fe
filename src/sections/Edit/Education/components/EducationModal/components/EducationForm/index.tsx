import { useFormik } from "formik";
import * as Yup from "yup";
import { EditEducationFields } from "../..";
import { Button, Card, Input } from "../../../../../../../components";
import { H2 } from "../../../../../../../styles";
import { Education } from "../../../../../../../types/entities.types";
import {
  StyledEducationForm,
  StyledEducationFormInput,
  StyledEducationFormInputContainer,
} from "./styled";

interface Props {
  isEdit: boolean;
  editingEducation?: Education;
  handleSubmitForm: (editingEducation: EditEducationFields) => void;
}

const EducationSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too short").max(50, "Too long"),
  institute: Yup.string().min(2, "Too short").max(50, "Too long"),
  startYear: Yup.string().min(2, "Too short").max(4, "Too long"),
  endYear: Yup.string().min(2, "Too short").max(4, "Too long").nullable(),
});

// Form data interface
interface CreateEducationFormInputs {
  title: string;
  institute: string;
  startYear: string;
  endYear: string;
}

export const EducationForm = ({
  isEdit,
  editingEducation,
  handleSubmitForm,
}: Props) => {
  const formik = useFormik<CreateEducationFormInputs>({
    initialValues: {
      title: editingEducation?.title || "",
      institute: editingEducation?.institute || "",
      startYear: editingEducation?.startYear || "",
      endYear: editingEducation?.endYear || "",
    },
    enableReinitialize: true,
    validationSchema: EducationSchema,
    onSubmit: async ({ title, institute, startYear, endYear }) => {
      handleSubmitForm({ title, institute, startYear, endYear });
    },
  });
  const educationForm = (
    <form onSubmit={formik.handleSubmit} data-testid="addEducationForm">
      <StyledEducationFormInputContainer>
        <StyledEducationFormInput>
          <Input
            name="title"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.title}
            type="text"
            placeholder="Bachelor degree"
            hasErrors={
              formik.touched.title && formik.errors.title ? true : false
            }
            errorMessage={formik.errors.title}
          />
        </StyledEducationFormInput>
      </StyledEducationFormInputContainer>
      <StyledEducationFormInputContainer>
        <StyledEducationFormInput>
          <Input
            name="institute"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.institute}
            type="text"
            placeholder="College / University"
            hasErrors={
              formik.touched.institute && formik.errors.institute ? true : false
            }
            errorMessage={formik.errors.institute}
          />
        </StyledEducationFormInput>
      </StyledEducationFormInputContainer>
      <StyledEducationFormInputContainer>
        <StyledEducationFormInput>
          <Input
            name="startYear"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.startYear}
            type="text"
            placeholder="2015"
            hasErrors={
              formik.touched.startYear && formik.errors.startYear ? true : false
            }
            errorMessage={formik.errors.startYear}
          />
        </StyledEducationFormInput>
        <StyledEducationFormInput>
          <Input
            name="endYear"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            value={formik.values.endYear}
            type="text"
            placeholder="2020"
            hasErrors={
              formik.touched.endYear && formik.errors.endYear ? true : false
            }
            errorMessage={formik.errors.endYear}
          />
        </StyledEducationFormInput>
      </StyledEducationFormInputContainer>
      <Button
        margin="32px 0"
        text="Create"
        disabled={!formik.isValid || !formik.dirty}
      />
    </form>
  );

  const educationFormContainer = (
    <StyledEducationForm>
      <H2>Create Education</H2>
      {educationForm}
    </StyledEducationForm>
  );

  return educationFormContainer;
};
