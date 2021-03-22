import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import PlusIcon from "../images/jpg/plusIcon.jpg";
import CircleIcon from "../images/jpg/circle.jpg";
import { WorkingExperience } from "../../../types/entities.types";

interface Props {
  workingExperiences: WorkingExperience[];
}

export const WorkingExperiences = ({ workingExperiences }: Props) => {
  const workingExperienceElement = (workingExperience: WorkingExperience) => {
    return (
      <View style={styles.blockDescription} key={workingExperience.id}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDate}>
          <Text style={styles.paragraphTitle}>
            {workingExperience.startDate}{" "}
            {workingExperience.endDate
              ? `- ${workingExperience.endDate}`
              : null}{" "}
            {workingExperience.isActual ? "- Now" : null}
          </Text>
        </View>
        <View style={styles.blockTitleDescription}>
          <Text style={styles.blockDescriptionTitle}>
            {workingExperience.title}
          </Text>
          <Text style={styles.paragraphTitle}>
            {workingExperience.position}
          </Text>
          <Text style={styles.blockDescriptionText}>
            {workingExperience.description}
          </Text>
        </View>
      </View>
    );
  };

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
      {workingExperiences.length > 0
        ? workingExperiences.map((workingExperience) =>
            workingExperienceElement(workingExperience)
          )
        : null}
    </View>
  );
};
