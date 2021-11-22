import React from "react";

import Spinner from "react-native-loading-spinner-overlay";
import { View, StyleSheet } from "react-native";

export default function Loading() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000000"
    }
  });

  return (
    <View styles={styles}>
      <Spinner
        visible={true}
        textContent={""}
        textStyle={{ color: "#FFF" }}
      />
    </View>
  );
}
