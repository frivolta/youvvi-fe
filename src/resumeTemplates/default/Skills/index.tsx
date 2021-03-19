import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import PlusIcon from "../images/jpg/plusIcon.jpg";
import CircleIcon from "../images/jpg/circle.jpg";

export const Skills = () => {
  return (
    <>
      <View style={styles.skillsTitle}>
        <View style={styles.blockTitle}>
          <View style={styles.blockTitleIcon}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleText}>
            <Text style={styles.title}>SKILLS PROFESSIONALI</Text>
          </View>
        </View>
      </View>
      <View style={styles.skills}>
        <View style={styles.blockDescriptionHalf}>
          <View style={styles.blockTitleIconCircle}>
            <Image src={CircleIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleDescriptionHalf}>
            <Text style={styles.blockDescriptionTitleSpaced}>
              Framework e librerie
            </Text>
            <Text style={styles.paragraphTitleSpaced}>React JS</Text>
            <Text style={styles.paragraphTitleSpaced}>React Native</Text>
            <Text style={styles.paragraphTitleSpaced}>Express</Text>
            <Text style={styles.paragraphTitleSpaced}>JQuery</Text>
          </View>
        </View>
      </View>
    </>
  );
};
