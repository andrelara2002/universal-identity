import { StyleSheet } from "react-native";

import { getColors } from "../../util/CustomHooks";

export default function HomeStyles(imageBorder) {
  const colors = getColors();

  const border = colors.tiers[imageBorder.toLowerCase()];

  const { background, card, text, subtext } = colors;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      padding: 20
    },
    saudation: {
      fontSize: 26,
      alignSelf: "center",
      color: text
    },
    name: {
      color: text,
      fontSize: 36,
      fontWeight: "bold",
      lineHeight: 40,
      marginBottom: 0
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginBottom: 10,
      borderWidth: 2,
      alignSelf: "center",
      borderColor: border
    },
    replacedImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#000",
      marginBottom: 10,
      borderWidth: 2,
      borderColor: border
    },
    recentActivity: {
      fontSize: 20,
      color: subtext,
      marginBottom: 10,
      fontWeight: "bold"
    },
    date: {
      fontSize: 14,
      color: subtext
    }
  });

  return styles;
}
