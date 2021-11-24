import { StyleSheet } from "react-native";

export default function ListProfessionalStyles(colors) {
    const { background, card, text, border,  } = colors;

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
        dividedView: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginTop: 0,
            marginBottom: 0,
            padding: 0
        },
        replacedImage: {
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#000",
            marginBottom: 10,
            borderWidth: 2,
            borderColor: border
        },
        containerColumn: {
            display: 'flex',
            flexDirection: 'columm'
        },
        cardView: {
            display: 'flex',
            flexDirection: 'columm',
            backgroundColor: card,
            width: '100%',
            padding: 10,
            borderRadius: 10,
            marginTop: 10
        },
        containerRow: {
            display: 'flex',
            flexDirection: 'row'
        },
        bg: {
            backgroundColor: card,
        },
        labelName: {
            fontSize: 22,
            fontWeight: "bold",
            color: text,
        },
        label: {
            fontSize: 12,
            fontWeight: "bold",
            color: text,
        },
        image: {
            border: border,
            margin: 0,
            width: 60,
            height: 60,
            borderRadius: 50
        }
    });
}
