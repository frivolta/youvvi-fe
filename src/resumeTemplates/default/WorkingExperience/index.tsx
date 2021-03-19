import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import PlusIcon from "../images/jpg/plusIcon.jpg";
import CircleIcon from "../images/jpg/circle.jpg";

export const WorkingExperiences = () => {
  return (
    <View style={styles.workingExperience}>
      <View style={styles.blockTitle}>
        <View style={styles.blockTitleIcon}>
          <Image src={PlusIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleText}>
          <Text style={styles.title}>ESPERIENZE LAVORATIVE</Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mar 2021 - Jul 2022</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            Come Ui / Ux Designer e Front-End Developer mi occupo di capire i
            requisiti, gli obiettivi, i vincoli e interagire con i progetti in
            modo da realizzare siti e applicazioni in linea con il brand del
            cliente, prendendo parte al processo di design, prototipazione e
            sviluppo con tecnologie come PHP e JavaScript.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mag 2015 - Ago 2015</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            Mediaset Premium Ui / Ux Designer, Consulente Run Design In
            collaborazione con il team interno all’azienda, ho preso parte alla
            realizzazione dell’esperienza utente e allo sviluppo della User
            Interface del sito web di Mediaset Premium fino al deploy della sua
            versione finale.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mar 2013 - Adesso</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            In sede presso la DCCI (Direzione Creativa Coordinamento Immagine),
            ho preso parte alla realizzazione di campagne stampa e web dei brand
            Mediaset.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mar 2013 - Adesso</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            In sede presso la DCCI (Direzione Creativa Coordinamento Immagine),
            ho preso parte alla realizzazione di campagne stampa e web dei brand
            Mediaset.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mar 2013 - Adesso</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            In sede presso la DCCI (Direzione Creativa Coordinamento Immagine),
            ho preso parte alla realizzazione di campagne stampa e web dei brand
            Mediaset.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mar 2013 - Adesso</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            In sede presso la DCCI (Direzione Creativa Coordinamento Immagine),
            ho preso parte alla realizzazione di campagne stampa e web dei brand
            Mediaset.{" "}
          </Text>
        </View>
      </View>
      <View style={styles.blockDescription}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>Mar 2013 - Adesso</Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>Run Design</Text>
          <Text style={styles.paragraphTitle}>Front-end developer</Text>
          <Text style={styles.blockDescriptionText}>
            In sede presso la DCCI (Direzione Creativa Coordinamento Immagine),
            ho preso parte alla realizzazione di campagne stampa e web dei brand
            Mediaset.{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};
