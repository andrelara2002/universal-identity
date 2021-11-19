import { StyleSheet } from "react-native";

import { Dimensions } from "react-native";

export default function LoginStyles(colors) {
  const { background } = colors;

  const windowHeigh = Dimensions.get("window").height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
      padding: 20,
      paddingBottom: windowHeigh > 700 ? 100 : 20,
      justifyContent: "flex-end"
    },
    waves: {
      position: "absolute",
      top: 0,
      right: 0,
      width: windowHeigh > 700 ? 400 : 250,
      height: windowHeigh > 700 ? 400 : 250
    }
  });

  return styles;
}
