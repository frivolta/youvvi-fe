import { Document, Page, View } from "@react-pdf/renderer";
import { styles } from "./style";
import { TopInfo } from "./TopInfo";
import { WorkingExperiences } from "./WorkingExperience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { BottomNotes } from "./BottomNotes";
import {
  Education as EducationInterface,
  Profile,
  Skillset,
  WorkingExperience,
} from "../../types/entities.types";

export interface Props {
  educations: EducationInterface[];
  skillset: Skillset[];
  workingExperiences: WorkingExperience[];
  profileInfos: Profile;
}

const DefaultTemplate = ({
  educations,
  skillset,
  workingExperiences,
  profileInfos,
}: Props) => (
  <Document>
    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      {profileInfos && <TopInfo profileInfos={profileInfos} />}
      {workingExperiences.length > 0 ? (
        <WorkingExperiences workingExperiences={workingExperiences} />
      ) : null}

      <View style={styles.footer} />
    </Page>

    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      {educations.length > 0 ? <Education educations={educations} /> : null}
      {skillset.length > 0 ? <Skills skillset={skillset} /> : null}
      {profileInfos.bottomNotes ? (
        <BottomNotes bottomNotes={profileInfos.bottomNotes} />
      ) : null}
      <View style={styles.footer} />
    </Page>
  </Document>
);

export default DefaultTemplate;
