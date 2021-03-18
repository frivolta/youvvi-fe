import {  StyleSheet,  Font } from '@react-pdf/renderer';
import AllerRegular from "./fonts/Aller/Aller_Rg.ttf";
import AllerBold from "./fonts/Aller/Aller_Bd.ttf";
import AllerItalic from "./fonts/Aller/Aller_It.ttf";

// Fonts Register
Font.register({
    family: 'AllerRegular',
    src: AllerRegular
  });
Font.register({
    family: 'AllerBold',
    src: AllerBold
  });
Font.register({
    family: 'AllerItalic',
    src: AllerItalic
  });
  
// Images
export const ProfileImage = 'https://i.ibb.co/YT4ybRf/g288.jpg'
export const WebsiteImage = 'https://i.ibb.co/PFZxH39/g346.png'
export const PlusIcon = 'https://i.ibb.co/Lxw4PKw/icon.png'

// Colors

// Font-sizes

// Typography

 export const styles = StyleSheet.create({
    
    title: {
      fontSize: 24,
      fontFamily: 'AllerRegular',
      alignSelf: 'flex-start',
      textTransform: 'uppercase'
    },
    subtitle: {
      fontSize: 12,
      fontFamily: 'AllerRegular',
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
      width: '33mm',
      height: '33mm',
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
  