import { StyleSheet } from "react-native";

export default function DocumentsStyles(colors) {
  const { background, card } = colors;

  return StyleSheet.create({
    container: {
      flex: 1,
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
    containerData: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
      //gap: 12
    },
    viewContentModal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    viewModal: {
      display: "flex",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(4,4,4, 0.40)",
      justifyContent: "center",
      alignItems: "center"
    },
    qrCodeModal: {
      width: 220,
      height: 220,
      borderRadius: 10
    },
    qrCode: {
      width: 120,
      height: 120,
      borderRadius: 10
    },
    containerImage: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
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
