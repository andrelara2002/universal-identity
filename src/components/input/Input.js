import React from "react";

import { TextInput, StyleSheet } from "react-native";
import { getColors } from "../../util/CustomHooks";

export function Input({ onChangeText, value, secureTextEntry, placeholder }) {
  const { card } = getColors();

  const styles = StyleSheet.create({
    Input: {
      backgroundColor: card,
      borderRadius: 5,
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      height: 50,
      width: "100%"
    }
  });
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.Input}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
    />
  );
}
