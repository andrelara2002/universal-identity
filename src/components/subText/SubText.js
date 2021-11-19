import React from "react";

import { Text, StyleSheet } from "react-native";
import { getColors } from "../../util/CustomHooks";

export default function SubText({ text, size }) {
  const { subText } = getColors();
  const styles = StyleSheet.create({
    subText: {
      fontSize: size ? size : 16,
      fontWeight: "100",
      color: subText
    }
  });

  return (
    <Text style={styles.subText}>
      {text}
    </Text>
  );
}
