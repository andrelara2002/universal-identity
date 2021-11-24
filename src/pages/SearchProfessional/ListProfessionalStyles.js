import { StyleSheet } from "react-native";
import {getColors} from "../../util/CustomHooks";

export default function ListProfessionalStyles(colors) {
    const { background, card, text, border, buttons } = colors;

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
            flexDirection: 'column'
        },
        cardView: {
            display: 'flex',
            flexDirection: 'column',
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
            borderColor: border,
            borderWidth: 1,
            margin: 0,
            width: 60,
            height: 60,
            borderRadius: 50
        },
        button: {
            backgroundColor: 'black',
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: colors.text
        }
    });
}
