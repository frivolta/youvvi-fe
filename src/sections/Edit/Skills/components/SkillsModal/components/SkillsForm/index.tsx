import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { truncateString } from "../../../../../../../app/helpers/truncate";
import { Button, IconAction, Input } from "../../../../../../../components";
import { H2, H4, Text } from "../../../../../../../styles";
import { CreateSkillsetInput } from "../../../../../../../types/api.types";
import { Skillset } from "../../../../../../../types/entities.types";
import {
  StyledListItem,
  StyledListItemIcon,
  StyledListItems,
  StyledSendIcon,
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
  const [skillsetSkills, setSkillsetSkills] = React.useState<string[]>([]);
  const [isEdited, setIsEdited] = React.useState<boolean>(false);

  //----Component effects
  React.useEffect(() => {
    isEdit && editingSkillset
      ? setSkillsetAndTitle(editingSkillset)
      : clearSkillsetAndTitle();
  }, [isEdit, editingSkillset]);
  //----./Component effects

  //----State Management
  const setSkillsetAndTitle = (newSkillset: Skillset) => {
    setSkillsetSkills(newSkillset.skills);
    setSkillsGroupTitle(newSkillset.title);
  };

  const clearSkillsetAndTitle = () => {
    setSkillsetSkills([]);
    setSkillsGroupTitle("");
  };

  const removeSkill = (s: string) => {
    setSkillsetSkills(skillsetSkills.filter((skill) => skill !== s));
    setIsEdited(true);
  };
  //----./State Management

  //----Actions dispatch
  const composePayloadAndSubmit = () => {
    const payload: CreateSkillsetInput = {
      title: skillsGroupTitle,
      skills: skillsetSkills,
    };
    handleSubmitForm(payload);
  };
  //----./Actions dispatch

  //----Formik Config
  // Group title settings
  const formikGroupTitle = useFormik<CreateSkillsGroupFormInputs>({
    initialValues: {
      title: skillsGroupTitle,
    },
    onSubmit: ({ title }) => {
      setSkillsGroupTitle(title);
      setIsEdited(true);
      formikGroupTitle.resetForm();
    },
    validationSchema: SkillsetGroupSchema,
    enableReinitialize: true,
  });

  // Skillset skill settings
  const formikGroupSkillset = useFormik<CreateSkillFormInputs>({
    initialValues: {
      skill: "",
    },
    onSubmit: ({ skill }) => {
      if (skillsetSkills.length < 5) {
        setSkillsetSkills([...skillsetSkills, skill]);
        setIsEdited(true);
        formikGroupSkillset.resetForm();
      }
    },
    validationSchema: SkillsetSkillSchema,
  });
  //----./Formik Config

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
            label="Edit title"
          />
        </StyledSkillsFormInput>
        <IconAction
          icon={<StyledSendIcon />}
          action={formikGroupTitle.submitForm}
          dataTestId="send-skillset-title"
        />
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
            label="Add new skill"
          />
        </StyledSkillsFormInput>
        <IconAction
          icon={<StyledSendIcon />}
          action={formikGroupSkillset.submitForm}
          dataTestId="send-skillset-skill"
        />
      </StyledSkillsFormInputContainer>
    </form>
  );

  // List the skills already in the group
  const groupSkillList = (skills: string[]) => {
    return (
      <StyledListItems>
        {skills.map((s, i) => (
          <StyledListItem onClick={() => removeSkill(s)}>
            <StyledListItemIcon /> <Text key={i}>{truncateString(s, 25)}</Text>
          </StyledListItem>
        ))}
      </StyledListItems>
    );
  };

  const groupSkillsContainer = (
    <StyledSkillsForm>
      <H2>Edit skillset</H2>
      {groupTitleForm}
      <H4>Current Skills</H4>
      {groupSkillForm}
      {skillsetSkills ? groupSkillList(skillsetSkills) : null}
      <Button
        handleClick={composePayloadAndSubmit}
        text="Submit"
        disabled={!isEdited || !skillsGroupTitle}
      />
    </StyledSkillsForm>
  );

  return groupSkillsContainer;
};
