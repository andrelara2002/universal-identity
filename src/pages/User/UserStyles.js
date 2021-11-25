import { getColors } from "../../util/CustomHooks";

import { StyleSheet } from "react-native";

export default function UserStyles() {
  const { background, card, text } = getColors();

  return StyleSheet.create({
    container: {
      backgroundColor: background,
      padding: 20,
      flex: 1
    }
  });
}
