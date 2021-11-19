import React from "react";

import { View, StyleSheet } from "react-native";

import SubText from "../subText/SubText";
import { Input } from "../input/Input";

export default function InputWithSubText({
  value,
  subText,
  onChangeText,
  size,
  secureTextEntry,
  placeholder
}) {
  const styles = StyleSheet.create({
    InputWithSubText: {
      flexDirection: "column",
      justifyContent: "space-between",
      width: size ? size : "100%"
    }
  });
  return (
    <View style={styles.InputWithSubText}>
      <SubText text={subText} />
      <Input
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={
          subText.toLowerCase() == "password" ? true : secureTextEntry
        }
        placeholder={placeholder}
      />
    </View>
  );
}
