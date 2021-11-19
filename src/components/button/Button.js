import React from "react";

import { getColors } from "../../util/CustomHooks";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Button({ text, onPress, color, outline }) {
  const colors = getColors().buttons;

  const styles = StyleSheet.create({
    Button: {
      backgroundColor: outline ? "transparent" : colors.normal,
      borderWidth: outline ? 1 : 0,
      borderColor: outline ? colors.normal : "transparent",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 5,
      width: "100%"
    },
    Text: {
      fontSize: 20,
      textAlign: "center",

      fontWeight: "bold",
      color: outline ? colors.normal : colors.text
    }
  });

  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.Text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
