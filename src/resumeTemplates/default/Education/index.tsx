import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import PlusIcon from "../images/jpg/plusIcon.jpg";
import CircleIcon from "../images/jpg/circle.jpg";

export const Education = () => {
  return (
    <>
      <View style={styles.educationTitle}>
        <View style={styles.blockTitle}>
          <View style={styles.blockTitleIcon}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleText}>
            <Text style={styles.title}>EDUCATION</Text>
          </View>
        </View>
      </View>
      <View style={styles.education}>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDateHalf}>
            <Text style={styles.paragraphTitle}>2012 - 2013</Text>
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitle}>Run Design</Text>
            <Text style={styles.paragraphTitle}>Front-end developer</Text>
          </View>
        </View>
      </View>
    </>
  );
};
