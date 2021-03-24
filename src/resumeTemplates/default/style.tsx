import { StyleSheet, Font } from "@react-pdf/renderer";
import AllerRegular from "./fonts/Aller/Aller_Rg.ttf";
import AllerBold from "./fonts/Aller/Aller_Bd.ttf";
import AllerItalic from "./fonts/Aller/Aller_It.ttf";
import AllerLight from "./fonts/Aller/Aller_Lt.ttf";

// Fonts Register
Font.register({
  family: "AllerRegular",
  src: AllerRegular,
});
Font.register({
  family: "AllerBold",
  src: AllerBold,
});
Font.register({
  family: "AllerItalic",
  src: AllerItalic,
});
Font.register({
  family: "AllerLight",
  src: AllerLight,
});

// Images

// Colors
const colors = {
  dark: "#232323",
  darkSecondary: "#000000",
  primary: "#FF204E",
  light: "#848487",
};

// Font-sizes
const fonts = {
  display: {
    size: 30,
    family: "AllerBold",
  },
  paragraph: {
    size: 9,
    family: "AllerLight",
    lineHeight: 1.5,
  },
  title: {
    size: 11,
    family: "AllerRegular",
  },
  subtitle: {
    size: 10,
    family: "AllerRegular",
  },
};

// Typography
const topInfoStyle = {
  contactTitle: {
    fontSize: fonts.subtitle.size,
    fontFamily: fonts.subtitle.family,
    color: colors.primary,
    alignSelf: "flex-start",
  },
  contactText: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.subtitle.family,
    color: colors.darkSecondary,
    alignSelf: "flex-start",
  },
  topInfo: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 70,
  },
  topInfoImage: {
    display: "flex",
    height: 100,
    flexGrow: 23,
    maxWidth: "23%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  avatarImage: {
    width: "33mm",
    height: "33mm",
    borderRadius: 1000,
    border: 1,
    borderColor: colors.primary,
    //@ts-ignore
    overflow: "hidden",
  },

  topInfoText: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "77%",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    flexGrow: 77,
    marginLeft: 20,
  },
  titleArea: {
    width: "100%",
  },
  contactArea: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 15,
  },
  contactAreaItem: {
    flexGrow: 1,
    height: 20,
    flexDirection: "row",
  },
  contactAreaText: {
    marginLeft: 10,
  },
  websiteIcon: {
    marginTop: 3,
    width: 14,
    height: 12,
  },
  phoneIcon: {
    marginTop: 3,
    width: 10.5,
    height: 13.5,
  },
  mailIcon: {
    marginTop: 3,
    width: 13,
    height: 13,
  },
  bio: {
    marginTop: 30,
    marginBottom: 10,
  },
};

const workingExperiencesStyle = {
  workingExperience: {
    marginTop: 20,
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
  },
  blockTitleIconCircle: {
    width: 5.5,
    marginTop: 2.5,
  },
};

const textStyle = {
  display: {
    fontSize: fonts.display.size,
    fontFamily: fonts.display.family,
    color: colors.dark,
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  displaySubtitle: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.paragraph.family,
    color: colors.light,
    marginTop: 3,
    letterSpacing: 1,
    alignSelf: "flex-start",
    textTransform: "uppercase",
  },
  paragraph: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.paragraph.family,
    lineHeight: fonts.paragraph.lineHeight,
    color: colors.dark,
    alignSelf: "flex-start",
  },
  paragraphTitle: {
    fontSize: fonts.paragraph.size,
    fontFamily: fonts.subtitle.family,
    color: colors.darkSecondary,
    alignSelf: "flex-start",
  },

  title: {
    fontSize: fonts.title.size,
    fontFamily: fonts.title.family,
    color: colors.dark,
    alignSelf: "flex-start",
  },

  subtitle: {
    fontSize: 12,
    fontFamily: "AllerRegular",
    alignSelf: "flex-start",
  },
};

const pageStyle = {
  body: {
    paddingHorizontal: 35,
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 30,
    backgroundColor: "#232323",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 20,
    backgroundColor: "#FF204E",
  },
};

export const commonStyles = {
  blockTitleIcon: {
    width: 10,
    marginBottom: 5,
  },
  blockTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  blockTitleText: {
    marginLeft: 10,
    flexGrow: 1,
    paddingBottom: 5,
    borderBottom: 0.7,
    borderColor: colors.darkSecondary,
  },
  blockDescription: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 5,
  },
  blockDescriptionText: {
    ...textStyle.paragraph,
    marginTop: 5,
  },
  blockDescriptionTitle: {
    ...textStyle.paragraphTitle,
    color: colors.primary,
  },
  blockDescriptionTitleSpaced: {
    ...textStyle.paragraphTitle,
    color: colors.primary,
    marginBottom: 5,
  },
  paragraphTitleSpaced: {
    ...textStyle.paragraphTitle,
    marginBottom: 2,
  },
  blockTitleDate: {
    marginLeft: 10,
    width: "17%",
  },
  blockTitleDescription: {
    marginLeft: 20,
    maxWidth: "77%",
    alignSelf: "flex-end",
  },
  blockTitleIconHalf: {
    width: 10,
    paddingBottom: 5,
  },
  blockTitleIconCircleHalf: {
    width: 10.5,
    marginTop: 2.5,
  },
  blockTitleDateHalf: {
    marginLeft: 10,
    width: "20%",
  },
  blockTitleDescriptionHalf: {
    marginLeft: 20,
    alignSelf: "flex-end",
  },
};

const bottomNotes = {
  bottomNotesContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "flex-end",
    marginBottom: 40,
    textAlign: "center",
  },
  bottomNote: { marginTop: 15 },
};

const educationStyle = {
  education: {
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "15%",
  },
  educationTitle: {
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    flexDirection: "column",
    marginTop: 60,
  },
};

export const styles = StyleSheet.create({
  ...topInfoStyle,
  ...textStyle,
  ...pageStyle,
  ...workingExperiencesStyle,
  ...commonStyles,
  ...bottomNotes,
  ...educationStyle,
  skills: {
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    flexDirection: "column",
    flexWrap: "wrap",
    maxHeight: "35%",
  },
  skillsTitle: {
    //@ts-ignore
    overflow: "hidden",
    position: "relative",
    flexDirection: "column",
    marginTop: 20,
  },
  blockDescriptionHalf: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "flex-start",
    width: "50%",
  },
});
