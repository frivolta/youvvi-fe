import { Text, View, Image } from "@react-pdf/renderer";
import { styles } from "../style";
import WebsiteIcon from "../images/jpg/www.jpg";
import ProfileImage from "../images/jpg/profileImage.jpg";
import MailIcon from "../images/jpg/email.jpg";
import PhoneIcon from "../images/jpg/phone.jpg";

export const TopInfo = () => {
  return (
    <>
      <View style={styles.topInfo}>
        <View style={styles.topInfoImage}>
          <View style={styles.avatarImage}>
            <Image src={ProfileImage} />
          </View>
        </View>
        <View style={styles.topInfoText}>
          <View style={styles.titleArea}>
            <Text style={styles.display}>Filippo Rivolta</Text>
            <Text style={styles.displaySubtitle}>
              FRONT-END DEVELOPER, UI / UX DESIGNER
            </Text>
          </View>
          <View style={styles.contactArea}>
            <View style={styles.contactAreaItem}>
              <Image src={WebsiteIcon} style={styles.websiteIcon} />
              <View style={styles.contactAreaText}>
                <Text style={styles.contactTitle}>Website</Text>
                <Text style={styles.contactText}>www.rivoltafilippo.com</Text>
              </View>
            </View>
            <View style={styles.contactAreaItem}>
              <Image src={PhoneIcon} style={styles.phoneIcon} />
              <View style={styles.contactAreaText}>
                <Text style={styles.contactTitle}>Phone</Text>
                <Text style={styles.contactText}>+39 334 7001377</Text>
              </View>
            </View>
            <View style={styles.contactAreaItem}>
              <Image src={MailIcon} style={styles.mailIcon} />
              <View style={styles.contactAreaText}>
                <Text style={styles.contactTitle}>Email</Text>
                <Text style={styles.contactText}>rivoltafilippo@gmail.com</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.paragraph}>
          Sono un Ui / Ux designer e sviluppatore front-end di Milano (IT), creo
          siti web e applicazioni innovativi, accessibili e veloci. Cerco di
          lasciare ogni bit di codice con cui interagisco più leggibile,
          modulare, performante e accessibile di come l’ho trovato. Mi
          appassiona scrivere e condividere ciò che ho imparato sia con il mio
          team sia con la grande community del web. In squadra, tendo a
          contribuire, mettere in risalto l’obiettivo finale del progetto e a
          incoraggiare una comunicazione più chiara, conconseguenti migliori
          risultati e un maggiore senso di soddisfazione per tutti i soggetti
          coinvolti nel processo di sviluppo e design.
        </Text>
      </View>
    </>
  );
};
