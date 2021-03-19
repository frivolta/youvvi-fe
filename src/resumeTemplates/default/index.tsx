import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./style";
import { TopInfo } from "./TopInfo";
import { WorkingExperiences } from "./WorkingExperience";
import { Education } from "./Education";

const DefaultTemplate = () => (
  <Document>
    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      <TopInfo />
      <WorkingExperiences />
      <View style={styles.footer} />
    </Page>

    <Page style={styles.body} size="A4">
      <View style={styles.header} />
      <Education />
      <View style={styles.footer} />
    </Page>
  </Document>
);

export default DefaultTemplate;
