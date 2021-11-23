import React from "react";

import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import SubText from "../subText/SubText";

import { getColors } from "../../util/CustomHooks";

export default function ImageButton({ source, onPress, text, tier }) {
  let borderColor = "";

  if (tier) {
    borderColor = getColors().tiers[tier];
  }

  const styles = StyleSheet.create({
    image: {
      width: 86,
      height: 86,
      resizeMode: "contain",
      borderRadius: 50,
      borderWidth: tier ? 2 : 0,
      borderColor: tier ? borderColor : "transparent",
      marginBottom: 5
    },
    container: {
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      margin: 10
    }
  });

  const mountImage = () => {
    if (source) {
      return (
        <Image
          source={{
            uri: source
          }}
          onPress={onPress}
        />
      );
    } else {
      return <View />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.image}>
        {mountImage()}
      </View>
      <SubText text={text} />
    </TouchableOpacity>
  );
}
