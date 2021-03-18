import {  Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { ProfileImage, styles, WebsiteImage } from '../style';

export const TopInfo = () => {
    return (
        <View style={styles.topInfo}>
        <View style={styles.topInfoImage}>
        <View style={styles.avatarImage}>
          <Image
        src={ProfileImage}
        
      />
          </View>
        </View>
        <View style={styles.topInfoText}>
          <View style={styles.titleArea}>
           <Text style={styles.title}>Filippo Rivolta</Text>
          <Text style={styles.subtitle}>FRONT-END DEVELOPER, UI / UX DESIGNER</Text>
          </View>
          <View style={styles.contactArea}>
            <View style={styles.contactAreaItem}>
              <Image src={WebsiteImage} style={styles.contactAreaIcon}/>
              <View style={styles.contactAreaText}>
                  <Text style={styles.subtitle}>
                        Website
                   </Text> 
                <Text style={styles.subtitle}>
                        www.rivoltafilippo.com
                   </Text>
              </View>
          </View>
           <View style={styles.contactAreaItem}>
              <Image src={WebsiteImage} style={styles.contactAreaIcon}/>
              <View style={styles.contactAreaText}>
                  <Text style={styles.subtitle}>
                        Website
                   </Text> 
                <Text style={styles.subtitle}>
                        www.rivoltafilippo.com
                   </Text>
              </View>
          </View>
            <View style={styles.contactAreaItem}>
              <Image src={WebsiteImage} style={styles.contactAreaIcon}/>
              <View style={styles.contactAreaText}>
                  <Text style={styles.subtitle}>
                        Website
                   </Text> 
                <Text style={styles.subtitle}>
                        www.rivoltafilippo.com
                   </Text>
              </View>
          </View>
          </View>
        </View>
        </View>
    )
}
