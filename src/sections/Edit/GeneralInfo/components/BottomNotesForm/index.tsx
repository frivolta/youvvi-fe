import { useFormik } from "formik";
import { Button, Card, Input } from "../../../../../components";
import { H2, H3 } from "../../../../../styles";
import { Profile } from "../../../../../types/entities.types";
import * as Yup from "yup";
import React from "react";

type Props = Pick<Profile, "bottomNotes">;

// Form data interface
interface UpdateBottomNotesFormInput {
  note:string;
}

// General info form schema
const BottomNotesSchema = Yup.object().shape({
  note: Yup.string().min(2, "Too short").max(500, "Too long").required('You need to insert a note'),
});

export const BottomNotesForm = ({bottomNotes}: Props) => {
    const  [updatedNotes, setUpdatedNotes] = React.useState<string[] | undefined>(bottomNotes)
    const  [formHasUpdates, setFormHasUpdates]=React.useState<boolean>(false)

const deleteNote = (note:string) =>{
    setUpdatedNotes(updatedNotes?.filter(n=> n!==note))
    setFormHasUpdates(true)
}

  const formik = useFormik<UpdateBottomNotesFormInput>({
    initialValues: {
      note: ""
    },
    validationSchema: BottomNotesSchema,
    onSubmit: async ({ note }) => {
      setUpdatedNotes([note, ...(updatedNotes || [])])
      setFormHasUpdates(true)
    },
  });

  const bottomNotesInputElements = () => (
    <form onSubmit={formik.handleSubmit} data-testid="General info forms">
      <Input
        name="note"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        value={formik.values.note}
        type="text"
        label="Note to add at the end of your cv"
        placeholder="Lorem ipsum..."
        hasErrors={formik.touched.note && formik.errors.note ? true : false}
        errorMessage={formik.errors.note}
      />
      <Button
        margin="32px 0"
        text="Add note"
        disabled={!formik.isValid || !formik.dirty}
        secondary
      />
    </form>
  );

  const allNotes = updatedNotes ? updatedNotes.map(updatedNote=>{
      return <Card>{updatedNote}
      <Button
        margin="32px 0"
        text="Delete note"
        secondary
        handleClick={()=>deleteNote(updatedNote)}
      />
      </Card>
  }) :null

  const bottomNotesCardElement = (
    <Card margin="32px auto">
      <H2>Bottom notes.</H2>
      {bottomNotesInputElements()}
      <H3>Your current notes</H3>
      {allNotes}
      <Button
        margin="32px 0"
        text="Save bottom note edits"
        disabled={!formHasUpdates}
      />
    </Card>
  );

  return <>{bottomNotesCardElement}</>;
};