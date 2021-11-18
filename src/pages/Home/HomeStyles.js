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
      marginTop: 10,
      fontSize: 26,
      color: subtext
    },
    name: {
      color: text,
      fontSize: 42,
      fontWeight: "bold"
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
      borderWidth: 2,
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
    }
  });

  return styles;
}
