import { StyleSheet } from "react-native";

import { getColors } from "../../util/CustomHooks";

export default function HomeStyles() {
  const { background, card, text, subtext } = getColors();

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
      marginBottom: 10
    },
    replacedImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: "#000",
      marginBottom: 10
    }
  });

  return styles;
}
