import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Input } from "../../../../../../../components";
import { H2, H3 } from "../../../../../../../styles";
import { CreateSkillsetInput } from "../../../../../../../types/api.types";
import { Skillset } from "../../../../../../../types/entities.types";
import {
  StyledSkillsForm,
  StyledSkillsFormInput,
  StyledSkillsFormInputContainer,
} from "./styled";

interface Props {
  isEdit: boolean;
  editingSkillset?: Skillset;
  handleSubmitForm: (updateSkillsetInput: CreateSkillsetInput) => void;
}

// Adding a Skill Group Form
const SkillsetGroupSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too short").max(50, "Too long").required(),
});

// Adding skills to the Skill Group
const SkillsetSkillSchema = Yup.object().shape({
  skill: Yup.string().min(2, "Too short").max(50, "Too long").required(),
});

interface CreateSkillsGroupFormInputs {
  title: string;
}

interface CreateSkillFormInputs {
  skill: string;
}

export const SkillsForm = ({
  isEdit,
  editingSkillset,
  handleSubmitForm,
}: Props) => {
  const [skillsGroupTitle, setSkillsGroupTitle] = React.useState<string>("");
  const [skillset, setSkillset] = React.useState<string[]>([]);

  // Group title settings
  const formikGroupTitle = useFormik<CreateSkillsGroupFormInputs>({
    initialValues: {
      title: editingSkillset?.title || skillsGroupTitle,
    },
    onSubmit: ({ title }) => {
      setSkillsGroupTitle(title);
    },
  });

  // Skillset skill settings
  const formikGroupSkillset = useFormik<CreateSkillFormInputs>({
    initialValues: {
      skill: "",
    },
    onSubmit: ({ skill }) => {
      setSkillset([...skillset, skill]);
    },
  });

  const groupTitleForm = (
    <form
      onSubmit={formikGroupTitle.handleSubmit}
      data-testid="addEducationForm"
    >
      <StyledSkillsFormInputContainer>
        <StyledSkillsFormInput>
          <Input
            name="title"
            handleChange={formikGroupTitle.handleChange}
            handleBlur={formikGroupTitle.handleBlur}
            value={formikGroupTitle.values.title}
            type="text"
            placeholder="Group title"
            hasErrors={
              formikGroupTitle.touched.title && formikGroupTitle.errors.title
                ? true
                : false
            }
            errorMessage={formikGroupTitle.errors.title}
          />
        </StyledSkillsFormInput>
      </StyledSkillsFormInputContainer>
    </form>
  );

  const groupSkillForm = (
    <form
      onSubmit={formikGroupSkillset.handleSubmit}
      data-testid="addEducationForm"
    >
      <StyledSkillsFormInputContainer>
        <StyledSkillsFormInput>
          <Input
            name="skill"
            handleChange={formikGroupSkillset.handleChange}
            handleBlur={formikGroupSkillset.handleBlur}
            value={formikGroupSkillset.values.skill}
            type="text"
            placeholder="New skillset"
            hasErrors={
              formikGroupSkillset.touched.skill &&
              formikGroupSkillset.errors.skill
                ? true
                : false
            }
            errorMessage={formikGroupSkillset.errors.skill}
          />
        </StyledSkillsFormInput>
      </StyledSkillsFormInputContainer>
    </form>
  );

  // List the skills already in the group
  const groupSkillList = ({ skills }: Skillset) => {
    return (
      <>
        <H3>Current Skills</H3>
        {skills.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </>
    );
  };

  const groupSkillsContainer = (
    <StyledSkillsForm>
      <H2>Edit skillset</H2>
      {groupTitleForm}
      {editingSkillset ? groupSkillList(editingSkillset) : null}
      {groupSkillForm}
    </StyledSkillsForm>
  );

  return groupSkillsContainer;
};
