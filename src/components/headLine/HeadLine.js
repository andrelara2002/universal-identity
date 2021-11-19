import React from "react";

import { getColors } from "../../util/CustomHooks";

import { Text, StyleSheet } from "react-native";

export default function HeadLine({ text, multiline}) {
  const styles = StyleSheet.create({
    headLine: {
      fontSize: 42,
      color: getColors().text || "#000",
      fontWeight: "bold",
      width: 182,
    }
  });

  return (
    <Text style={styles.headLine} multiline= {multiline}>
      {text}
    </Text>
  );
}
