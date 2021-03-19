import { Text, View } from "@react-pdf/renderer";
import { styles } from "../style";

export const BottomNotes = () => {
  return (
    <>
      <View style={styles.bottomNotesContainer}>
        <Text style={styles.paragraphTitle}>
          Autorizzo il trattamento dei dati personali contenuti nel mio
          curriculum vitae in base all’art. 13 del D. Lgs. 196/2003 e all’art.
          13 del Regolamento UE 2016/679 relativo alla protezione delle persone
          fisiche con riguardo al trattamento dei dati personali.
        </Text>
      </View>
    </>
  );
};
