import { StyleSheet } from "react-native";

export default function SearchProfessionalStyles(colors) {
  const { background, card, text } = colors;

  return StyleSheet.create({
    container: {
      padding: 20,
      backgroundColor: background
    },
    wrapped: {
      paddingBottom: 20,
      paddingTop: 20,
      borderWidth: 1,
      borderColor: card,
      flexDirection: "column",
      borderRadius: 10,
      paddingRight: 5,
      paddingLeft: 5
    },
    boxHeaderView: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: text
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
