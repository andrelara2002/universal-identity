import { StyleSheet } from "react-native";

export default function RegisterStyles(colors) {
  const { background } = colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: background,
    },
    dividedView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: 0,
      marginBottom: 0,
      padding: 0
    }
  });
}
