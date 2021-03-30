import { useFormik } from "formik";
import { Button, Card, Input } from "../../../../../components";
import { H2 } from "../../../../../styles";
import * as Yup from "yup";
import { Education } from "../../../../../types/entities.types";

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

interface Props {
  editingEducation?: Education;
  handleResetEducation: () => void;
}

export const EducationForm = ({
  editingEducation,
  handleResetEducation,
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
    onSubmit: async ({ title, institute, startYear, endYear }) => {},
  });
  const educationForm = (
    <form onSubmit={formik.handleSubmit} data-testid="addEducationForm">
      <Input
        name="title"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.title}
        type="text"
        placeholder="Bachelor degree"
        hasErrors={formik.touched.title && formik.errors.title ? true : false}
        errorMessage={formik.errors.title}
      />
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
      <Button
        margin="32px 0"
        text={!editingEducation ? `Create new` : `Save`}
        disabled={!formik.isValid || !formik.dirty}
      />
      {editingEducation ? (
        <Button
          margin="32px 0"
          text="Dismiss edit"
          secondary
          handleClick={handleResetEducation}
        />
      ) : null}
    </form>
  );

  const educationFormContainer = (
    <Card margin="32px auto">
      <H2>
        {!editingEducation ? `Add a new education title` : `Edit education`}
      </H2>
      {educationForm}
    </Card>
  );

  return educationFormContainer;
};
