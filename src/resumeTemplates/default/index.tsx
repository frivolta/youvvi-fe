import { Document, Page, View } from "@react-pdf/renderer";
import { styles } from "./style";
import { TopInfo } from "./TopInfo";
import { WorkingExperiences } from "./WorkingExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { BottomNotes } from "./BottomNotes";
import {
  Education as EducationInterface,
  Skillset,
  WorkingExperience,
} from "../../types/entities.types";

export interface Props {
  educations: EducationInterface[];
  skillset: Skillset[];
  workingExperiences: WorkingExperience[];
}

const DefaultTemplate = ({
  educations,
  skillset,
  workingExperiences,
}: Props) => (
  <Document>
    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      <TopInfo />
      {workingExperiences.length > 0 ? (
        <WorkingExperiences workingExperiences={workingExperiences} />
      ) : null}

      <View style={styles.footer} />
    </Page>

    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      {educations.length > 0 ? <Education educations={educations} /> : null}
      {skillset.length > 0 ? <Skills skillset={skillset} /> : null}
      <BottomNotes />
      <View style={styles.footer} />
    </Page>
  </Document>
);

export default DefaultTemplate;
