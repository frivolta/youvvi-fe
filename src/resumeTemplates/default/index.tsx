import { Document, Page, View } from "@react-pdf/renderer";
import { styles } from "./style";
import { TopInfo } from "./TopInfo";
import { WorkingExperiences } from "./WorkingExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { BottomNotes } from "./BottomNotes";
import { Education as EducationInterface } from "../../types/api.types";

export interface DefaultTemplate {
  educations: EducationInterface[];
}

const DefaultTemplate = ({ educations }: DefaultTemplate) => (
  <Document>
    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      <TopInfo />
      <WorkingExperiences />
      <View style={styles.footer} />
    </Page>

    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      {educations.length > 0 ? <Education educations={educations} /> : null}
      <Skills />
      <BottomNotes />
      <View style={styles.footer} />
    </Page>
  </Document>
);

export default DefaultTemplate;
