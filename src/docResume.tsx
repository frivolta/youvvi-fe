import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';

const Resume = () => (
    <Document>
      <Page style={styles.body} size="A4">
        <View style={styles.header}/>
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
        
        
        <View style={styles.bio}>
           <Text style={styles.subtitle}>
                            Sono un Ui / Ux designer e sviluppatore front-end di Milano (IT), creo siti web e applicazioni innovativi, accessibili e veloci.
  Cerco di lasciare ogni bit di codice con cui interagisco più leggibile, modulare, performante e accessibile di come l’ho trovato.
  Mi appassiona scrivere e condividere ciò che ho imparato sia con il mio team sia con la grande community del web. In squadra,
  tendo a contribuire, mettere in risalto l’obiettivo finale del progetto e a incoraggiare una comunicazione più chiara, conconseguenti migliori risultati e un maggiore senso di soddisfazione per tutti i soggetti coinvolti nel processo di sviluppo e design.
                       </Text>
        </View>
        
        
        <View style={styles.workingExperience}>
          <View style={styles.blockTitle}>
            <View style={styles.blockTitleIcon}>
               <Image src={PlusIcon} style={styles.blockIcon}/>
              </View>
            <View style={styles.blockTitleTitle}>
              <Text style={styles.subtitle}>WORKING EXPERIENCES</Text>
              </View>
            </View>
          <View style={styles.blockDescription}>
             <View style={styles.blockTitleIconCircle}>
                <Image src={PlusIcon} style={styles.blockIcon}/>
             </View>
            <View style={styles.blockTitleDate}>
              <Text style={styles.subtitle}>Mar 2021 - Jul 2022</Text>
            </View>
            <View style={styles.blockTitleDescription}>
              <Text style={styles.subtitle}>Run Design</Text>
              <Text style={styles.subtitle}>Front-end developer</Text>
              <Text style={styles.subtitle}>Come Ui / Ux Designer e Front-End Developer mi occupo di capire i requisiti, gli obiettivi, i vincoli
  e interagire con i progetti in modo da realizzare siti e applicazioni in linea con il brand del cliente,
  prendendo parte al processo di design, prototipazione e sviluppo con tecnologie come PHP e
  JavaScript. </Text>
            </View>
            
          </View>
          <View style={styles.blockDescription}>
             <View style={styles.blockTitleIconCircle}>
                <Image src={PlusIcon} style={styles.blockIcon}/>
             </View>
            <View style={styles.blockTitleDate}>
              <Text style={styles.subtitle}>Mag 2015 - Ago 2015</Text>
            </View>
            <View style={styles.blockTitleDescription}>
              <Text style={styles.subtitle}>Run Design</Text>
              <Text style={styles.subtitle}>Front-end developer</Text>
              <Text style={styles.subtitle}>Mediaset Premium
  Ui / Ux Designer, Consulente Run Design
  In collaborazione con il team interno all’azienda, ho preso parte alla realizzazione dell’esperienza
  utente e allo sviluppo della User Interface del sito web di Mediaset Premium fino al deploy della
  sua versione finale. </Text>
            </View>
            
          </View>
          <View style={styles.blockDescription}>
             <View style={styles.blockTitleIconCircle}>
                <Image src={PlusIcon} style={styles.blockIcon}/>
             </View>
            <View style={styles.blockTitleDate}>
              <Text style={styles.subtitle}>Mar 2013 - Adesso</Text>
            </View>
            <View style={styles.blockTitleDescription}>
              <Text style={styles.subtitle}>Run Design</Text>
              <Text style={styles.subtitle}>Front-end developer</Text>
              <Text style={styles.subtitle}>In sede presso la DCCI (Direzione Creativa Coordinamento Immagine), ho preso parte alla realizzazione di campagne stampa e web dei brand Mediaset. </Text>
            </View>
            
          </View>
          
        </View>
        
        
        <View style={styles.footer}/>
      </Page>
      <Page style={styles.body} size="A4">
        <View style={styles.header}/>
            <View style={styles.educationTitle}>
          <View style={styles.blockTitle}>
            <View style={styles.blockTitleIcon}>
               <Image src={PlusIcon} style={styles.blockIcon}/>
              </View>
            <View style={styles.blockTitleTitle}>
              <Text style={styles.subtitle}>EDUCATION</Text>
              </View>
            </View>
          
          
        </View>
        <View style={styles.education}>
          <View style={styles.blockDescriptionHalf}>
             <View style={styles.blockTitleIconCircleHalf}>
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
                <Image src={PlusIcon} style={styles.blockIcon}/>
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
        <View style={styles.footer}/>
      </Page>
    </Document>
  );
  
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
  });
  
  const ProfileImage = 'https://i.ibb.co/YT4ybRf/g288.jpg'
  const WebsiteImage = 'https://i.ibb.co/PFZxH39/g346.png'
  const PlusIcon = 'https://i.ibb.co/Lxw4PKw/icon.png'
  
  const styles = StyleSheet.create({
    
    title: {
      fontSize: 24,
      fontFamily: 'Oswald',
      alignSelf: 'flex-start',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: 12,
      fontFamily: 'Oswald',
      alignSelf: 'flex-start',
    },
    bio:{
      marginTop: 5,
      backgroundColor: 'red',
    },
    body: {
      paddingHorizontal: 35,
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },
    header: {
     position: 'absolute',
      top: 0,
      left: 0,
      right:0,
      height: 40,
      backgroundColor: '#232323'
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right:0,
      height: 20,
      backgroundColor: '#FF204E'
    },
    workingExperience:{
      marginTop: 20,
      //@ts-ignore
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'green'
    },
      education:{
      //@ts-ignore
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'green',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '25%'
    },
    educationTitle:{
      //@ts-ignore
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'green',
      flexDirection: 'column',
      marginTop:60
    },
    blockTitle: {
      backgroundColor: 'yellow',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5
    },
    blockDescription: {
       display: 'flex',
       flexDirection: 'row',
       padding: 5,
       alignItems: 'flex-start'
    },
      blockDescriptionHalf: {
       display: 'flex',
       flexDirection: 'row',
       padding: 5,
       alignItems: 'flex-start',
       width: '50%'
    },
    blockTitleTitle: {
      marginLeft: 10,
      flexGrow: 1,
      paddingBottom: 5,
      borderBottom: 1
    },
    blockTitleIcon: {
      width:10,
      paddingBottom: 5,
    },
     blockTitleIconCircle: {
      width:10,
       marginTop: 5,
    },
    blockTitleDate: {
      marginLeft: 10,
      width: '20%'
    },
    blockTitleDescription:{
      marginLeft: 20,
      maxWidth: '70%',
      alignSelf: 'flex-end'
    },
    blockTitleIconHalf: {
      width:10,
      paddingBottom: 5,
    },
     blockTitleIconCircleHalf: {
      width:10,
       marginTop: 5,
    },
    blockTitleDateHalf: {
      marginLeft: 10,
    },
    blockTitleDescriptionHalf:{
      marginLeft: 20,
      alignSelf: 'flex-end'
    },
    topInfo:{
      backgroundColor: 'red',
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent:'flex-start',
      marginTop:60,
    },
     topInfoImage:{
      backgroundColor: 'blue',
      display: 'flex',
      height: 130,
         flexGrow: 27,
       maxWidth: '27%',
       justifyContent: 'center',
       alignItems: 'center'
    },
    avatarImage: {
      backgroundColor: 'yellow',
      width: 90,
      height: 90,
      borderRadius: 1000,
      border: 2,
      borderColor: '#FF204E',
      //@ts-ignore
      overflow:'hidden'
    },
    
     topInfoText:{
      backgroundColor: 'green',
      display: 'flex',
       flexDirection: 'column',
      maxWidth: '73%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 130,
      flexGrow: 73,
    },
    titleArea: {
      width: '100%',
        backgroundColor: 'yellow',
    },
      contactArea: {
        width: '100%',
        backgroundColor: 'red',
        height: 20,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      },
    contactAreaItem:{
      backgroundColor: 'purple',
      flexGrow: 1,
      height: 20,
      flexDirection:'row',
    },
    contactAreaIcon: {
      width:18,
      height:15,
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });
  
  export default Resume