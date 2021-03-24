import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import PlusIcon from "../images/jpg/plusIcon.jpg";
import CircleIcon from "../images/jpg/circle.jpg";
import { Education as EducationInterface } from "../../../types/entities.types";

export interface EducationComponent {
  educations: EducationInterface[];
}
export const Education = ({ educations }: EducationComponent) => {
  const educationElement = (education: EducationInterface) => (
    <View style={styles.blockDescriptionHalf}>
      <View style={styles.blockTitleIconCircle}>
        <Image src={CircleIcon} style={styles.blockIcon} />
      </View>
      <View style={styles.blockTitleDateHalf}>
        <Text style={styles.paragraphTitle}>
          {education.startYear}
          {education.endYear && ` - ${education.endYear}`}
        </Text>
      </View>
      <View style={styles.blockTitleDescriptionHalf}>
        <Text style={styles.blockDescriptionTitle}>{education.title}</Text>
        <Text style={styles.paragraphTitle}>{education.institute}</Text>
      </View>
    </View>
  );

  return (
    <>
      <View style={styles.educationTitle}>
        <View style={styles.blockTitle}>
          <View style={styles.blockTitleIcon}>
            <Image src={PlusIcon} style={styles.blockIcon} />
          </View>
          <View style={styles.blockTitleText}>
            <Text style={styles.title}>EDUCAZIONE</Text>
          </View>
        </View>
      </View>
      <View style={styles.education}>
        {educations.length > 0
          ? educations.map((education) => {
              return educationElement(education);
            })
          : null}
      </View>
    </>
  );
};
