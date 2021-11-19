import React from "react";

import { View, StyleSheet } from "react-native";

export default function Divisor({ color, height }) {
  const styles = StyleSheet.create({
    bar: {
      borderBottomWidth: 2,
      borderColor: color ? color : "#000",
      marginTop: height / 2,
      marginBottom: height / 2,
      width: "15%",
      alignSelf: "center"
    }
  });

  return <View style={styles.bar} />;
}
