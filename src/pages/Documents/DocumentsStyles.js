import { StyleSheet } from "react-native";

export default function DocumentsStyles(colors) {
  const { background } = colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: background,
    },
    containerData: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: "wrap",
      gap: '12px'
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
