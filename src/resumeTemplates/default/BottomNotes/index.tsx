import { Text, View } from "@react-pdf/renderer";
import { styles } from "../style";

interface Props {
  bottomNotes: string[];
}

export const BottomNotes = ({ bottomNotes }: Props) => {
  /*   {getBottomNotes()?.map((bottomNote, i) => (
    <Text style={styles.paragraphTitle} key={bottomNote + i}>
      {bottomNote}
    </Text>
  ))} */
  return (
    <>
      <View style={styles.bottomNotesContainer}>
        {bottomNotes
          ? bottomNotes.map((bottomNote, i) => (
              <View style={styles.bottomNote}>
                <Text style={styles.paragraphTitle} key={bottomNote + i}>
                  {bottomNote}
                </Text>
              </View>
            ))
          : null}
      </View>
    </>
  );
};
