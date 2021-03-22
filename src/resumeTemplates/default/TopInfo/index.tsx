import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import WebsiteIcon from "../images/jpg/www.jpg";
import MailIcon from "../images/jpg/email.jpg";
import PhoneIcon from "../images/jpg/phone.jpg";
import { Profile } from "../../../types/entities.types";

interface Props {
  profileInfos: Profile;
}

const contactGroup = {
  phone: {
    title: "Phone",
    imageComponent: <Image src={PhoneIcon} style={styles.phoneIcon} />,
  },
  email: {
    title: "Email",
    imageComponent: <Image src={MailIcon} style={styles.mailIcon} />,
  },
  website: {
    title: "Website",
    imageComponent: <Image src={WebsiteIcon} style={styles.websiteIcon} />,
  },
};

export const TopInfo = ({ profileInfos }: Props) => {
  const topInfoImageElement = profileInfos.photoUrl ? (
    <View style={styles.topInfoImage}>
      <View style={styles.avatarImage}>
        <Image src={profileInfos.photoUrl} />
      </View>
    </View>
  ) : null;

  const titleElement = (
    <View style={styles.titleArea}>
      <Text style={styles.display}>{profileInfos.name}</Text>
      <Text style={styles.displaySubtitle}>{profileInfos.workTitle}</Text>
    </View>
  );

  const getContactArea = (
    contactName: "phone" | "email" | "website",
    contactText: string
  ) => {
    return (
      <View style={styles.contactAreaItem}>
        {contactGroup[contactName].imageComponent}
        <View style={styles.contactAreaText}>
          <Text style={styles.contactTitle}>
            {contactGroup[contactName].title}
          </Text>
          <Text style={styles.contactText}>{contactText}</Text>
        </View>
      </View>
    );
  };

  const bioElement = profileInfos.biography ? (
    <View style={styles.bio}>
      <Text style={styles.paragraph}>{profileInfos.biography}</Text>
    </View>
  ) : null;

  return (
    <>
      <View style={styles.topInfo}>
        {topInfoImageElement}
        <View style={styles.topInfoText}>
          {titleElement}
          <View style={styles.contactArea}>
            {profileInfos.website
              ? getContactArea("website", profileInfos.website)
              : null}
            {profileInfos.phone
              ? getContactArea("phone", profileInfos.phone)
              : null}
            {profileInfos.email
              ? getContactArea("email", profileInfos.email)
              : null}
          </View>
        </View>
      </View>
      {bioElement}
    </>
  );
};
