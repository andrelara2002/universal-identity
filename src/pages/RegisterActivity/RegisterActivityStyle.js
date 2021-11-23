import { StyleSheet } from "react-native";
import { getColors } from "../../util/CustomHooks";

export default function RegisterActivityStyle() {
  const { text, background, card } = getColors();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      padding: 20
    },
    RatingBox: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
      borderWidth: 1,
      borderColor: card
    },
    RatingText: {
      fontSize: 20,
      color: text,
      fontWeight: "bold",
      marginTop: 10,
      textAlign: "center",
      marginBottom: 10
    }
  });
  return styles;
}
