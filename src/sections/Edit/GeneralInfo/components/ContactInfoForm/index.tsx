import { useFormik } from "formik";
import { Button, Card, Input } from "../../../../../components";
import { H2 } from "../../../../../styles";
import { Profile } from "../../../../../types/entities.types";
import * as Yup from "yup";

type Props = Pick<Profile, "email" | "phone" | "website">;

// Form data interface
interface UpdateContactInfoFormInput {
  email?:string;
  phone?: string;
  website?: string;
}

// General info form schema
const ContactInfoSchema = Yup.object().shape({
  email: Yup.string().email('Insert a valid email'),
  phone: Yup.string().min(2, "Too short").max(20, "Too long"),
  website: Yup.string()
  .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    "Enter a valid url"
  )
});

export const ContactInfoForm = ({
  email, website, phone
}: Props) => {
  const formik = useFormik<UpdateContactInfoFormInput>({
    initialValues: {
      email,
      phone,
      website
    },
    validationSchema: ContactInfoSchema,
    onSubmit: async ({ email, website, phone }) => {
      console.log("submit", email, website,phone);
    },
  });

  const contactInputElements = () => (
    <form onSubmit={formik.handleSubmit} data-testid="General info forms">
      <Input
        name="email"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.email}
        type="text"
        label="Email"
        placeholder="info@email.com"
        hasErrors={formik.touched.email && formik.errors.email ? true : false}
        errorMessage={formik.errors.email}
      />
      <Input
        name="website"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.website}
        type="text"
        label="Website"
        placeholder="https://www..."
        hasErrors={
          formik.touched.website && formik.errors.website ? true : false
        }
        errorMessage={formik.errors.website}
      />
      <Input
        name="phone"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.phone}
        type="text"
        label="Phone"
        placeholder="555-"
        hasErrors={
          formik.touched.phone && formik.errors.phone ? true : false
        }
        errorMessage={formik.errors.phone}
      />
      <Button
        margin="32px 0"
        text="Update contact informations"
        disabled={!formik.isValid || !formik.dirty}
      />
    </form>
  );

  const contactInfoCardElement = (
    <Card margin="32px auto">
      <H2>Contact informations.</H2>
      {contactInputElements()}
    </Card>
  );

  return <>{contactInfoCardElement}</>;
};
