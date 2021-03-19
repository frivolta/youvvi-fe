import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { styles } from "./style";
import { TopInfo } from "./TopInfo";
import PlusIcon from "./images/jpg/plusIcon.jpg";
import { WorkingExperiences } from "./WorkingExperience";
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
      <View style={styles.educationTitle}>
        <View style={styles.blockTitle}>
          <View style={styles.blockTitleIcon}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleTitle}>
            <Text style={styles.subtitle}>EDUCATION</Text>
          </View>
        </View>
      </View>
      <View style={styles.education}>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircleHalf}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.subtitle}>Run Design</Text>
            <Text style={styles.subtitle}>Front-end developer</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer} />
    </Page>
  </Document>
);

export default DefaultTemplate;
