import { useFormik } from "formik";
import { Button, Card, Input } from "../../../../../components";
import { H2 } from "../../../../../styles";
import { Profile } from "../../../../../types/entities.types";
import * as Yup from "yup";

interface Props{
  name: string | null;
  workTitle: string | null;
  photoUrl?: string;
  biography?: string
  handleUpdateProfile: (updatedInformations: Partial<Profile>) => void;
}


// Form data interface
interface UpdateGeneralInfoFormInput {
  name: string | null;
  photoUrl?: string;
  workTitle: string | null;
  biography?: string;
}

// General info form schema
const GeneralInfoSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required").nullable(),
  workTitle: Yup.string()
    .min(2, "Too short")
    .max(50, "Too long")
    .required("Required").nullable(),
  biography: Yup.string().min(2, "Too short").max(500, "Too long").nullable(),
  photoUrl: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter a valid url"
    )
    .required("Please enter your profile url").nullable(),
});

export const GeneralInfoForm = ({
  name,
  photoUrl,
  workTitle,
  biography,
  handleUpdateProfile
}: Props) => {
  const formik = useFormik<UpdateGeneralInfoFormInput>({
    initialValues: {
      name: name || "John Doe",
      photoUrl,
      workTitle: workTitle || "Work title",
      biography,
    },
    validationSchema: GeneralInfoSchema,
    onSubmit: async ({ name, photoUrl, workTitle, biography }) => {
      handleUpdateProfile({name, photoUrl, biography, workTitle,})
    },
  });

  const generalInputElements = () => (
    <form onSubmit={formik.handleSubmit} data-testid="General info forms">
      <Input
        name="name"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.name || ""}
        type="text"
        label="Your personal name"
        placeholder="John Doe"
        hasErrors={formik.touched.name && formik.errors.name ? true : false}
        errorMessage={formik.errors.name}
      />
      <Input
        name="photoUrl"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.photoUrl}
        type="text"
        label="Url to your photo"
        placeholder="https://www..."
        hasErrors={
          formik.touched.photoUrl && formik.errors.photoUrl ? true : false
        }
        errorMessage={formik.errors.photoUrl}
      />
      <Input
        name="workTitle"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.workTitle || ""}
        type="text"
        label="Your work title"
        placeholder="Front-end Developer"
        hasErrors={
          formik.touched.workTitle && formik.errors.workTitle ? true : false
        }
        errorMessage={formik.errors.workTitle}
      />
      <Input
        name="biography"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.biography || ""}
        type="text"
        label="Biography"
        placeholder="Something about you..."
        hasErrors={
          formik.touched.biography && formik.errors.biography ? true : false
        }
        errorMessage={formik.errors.biography}
      />
      <Button
        margin="32px 0"
        text="Update general informations"
        disabled={!formik.isValid}
      />
    </form>
  );

  const generalInfoCardElement = (
    <Card>
      <H2>General informations.</H2>
      {generalInputElements()}
    </Card>
  );

  return <>{generalInfoCardElement}</>;
};
