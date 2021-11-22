import React from "react";

import { View, Text, StyleSheet } from "react-native";

import SubText from "../subText/SubText";
import { getColors } from "../../util/CustomHooks";

export default function LabelWithSubText({ subText, label, size, height }) {
  const { card } = getColors();
  const styles = StyleSheet.create({
    label: {
      backgroundColor: card,
      borderRadius: 5,
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      fontSize: size ? size : 20,
      fontWeight: "bold",
      height: height ? height : 50,
      width: "100%"
    }
  });
  return (
    <View style={styles.container}>
      <SubText text={subText} />
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}
