import React from "react";

import { TextInput, StyleSheet } from "react-native";
import { getColors } from "../../util/CustomHooks";
import MaskInput from "react-native-mask-input";

export function Input({
  onChangeText,
  value,
  secureTextEntry,
  placeholder,
  mask,
  disabled,
  keyboardType,
  returnKeyType
}) {
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

  function getKeyboardType() {
    return keyboardType || 'default'
  }

  function getReturnKeyType() {
    return returnKeyType || 'done'
  }

  return (
    <MaskInput
      disabled={disabled}
      value={value}
      onChangeText={(masked, unmasked) => onChangeText(masked)}
      style={styles.Input}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      mask={mask}
      autoFocus={true}
      keyboardType={getKeyboardType()}
      returnKeyType={getReturnKeyType()}
    />
  );
}
