import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import PlusIcon from "../images/jpg/plusIcon.jpg";
import CircleIcon from "../images/jpg/circle.jpg";
import { Skillset } from "../../../types/entities.types";

interface Props {
  skillset: Skillset[];
}

export const Skills = ({ skillset }: Props) => {
  const skillsetElement = (skillset: Skillset) => {
    const parsedSkills = JSON.parse(skillset.skills) as string[];

    return (
      <View style={styles.blockDescriptionHalf} key={skillset.id}>
        <View style={styles.blockTitleIconCircle}>
          <Image src={CircleIcon} style={styles.blockIcon} />
        </View>
        <View style={styles.blockTitleDescriptionHalf}>
          <Text style={styles.blockDescriptionTitleSpaced}>
            {skillset.title}
          </Text>
          {parsedSkills.length > 0
            ? parsedSkills.map((skill, i) => (
                <Text
                  key={`${skillset.id}${i}${skill}`}
                  style={styles.paragraphTitleSpaced}
                >
                  {skill}
                </Text>
              ))
            : null}
        </View>
      </View>
    );
  };

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
      {skillset.length > 0 ? (
        <View style={styles.skills}>
          {skillset.map((s) => skillsetElement(s))}
        </View>
      ) : null}
    </>
  );
};
