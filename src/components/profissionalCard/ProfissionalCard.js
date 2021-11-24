import React from "react";

import { Text, View, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import { getColors, setTier } from "../../util/CustomHooks";

export default function ProfissionalCard(props) {
  const { rate, hours } = props;

  const { card, text, subtext, tiers, buttons } = getColors();
  const profissional = setTier(rate, hours);
  const actualColor = tiers[profissional.name];

  const separeProfissional = () => {
    let _text = profissional.text.replace("Profissional", "");
    const originalArray = _text.split(" ");
    let string = "";

    for (let i = 0; i < originalArray.length; i++) {
      string += originalArray[i];
    }

    const processedArray = [originalArray, "Profissional"];

    return processedArray.map((item, index) => {
      return (
        <Text key={index} style={styles.title}>
          {item}
        </Text>
      );
    });
  };

  const styles = StyleSheet.create({
    container: {
      width: "90%",
      backgroundColor: actualColor,
      borderRadius: 10,
      padding: 20
    },
    saudation: {
      fontSize: 15,
      color: text,
      fontWeight: "300",
      marginBottom: 5
    },
    title: {
      color: text,
      fontSize: 26,
      fontWeight: "bold",
      margin: 0,
      lineHeight: 30
    },
    buttons: {
      flexDirection: "row",
      marginTop: 10
    },
    button: {
      padding: 12,
      borderRadius: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: buttons.normal,
      height: 35,
      marginRight: 5
    },
    buttonLabel: {
      color: card,
      fontSize: 10
    },
    Image: {
      width: 130,
      height: 130,
      position: "absolute",
      resizeMode: "contain",
      bottom: 0,
      right: 0,
      zIndex: 10
    }
  });

  const setRequireImage = () => {
    switch (profissional.name) {
      case "excelent":
        return require("../../../assets/excelent.png");
      case "great":
        return require("../../../assets/great.png");
      case "good":
        return require("../../../assets/good.png");
      case "bad":
        return require("../../../assets/bad.png");
      default:
        return require("../../../assets/excelent.png");
    }
  };

  return (
    <View style={{ height: 200, width: "100%", padding: 0 }}>
      <Image style={styles.Image} source={setRequireImage()} />
      <View style={styles.container}>
        <Text style={styles.saudation}>You're a</Text>
        {separeProfissional()}
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Icon
              name={"time-outline"}
              type={"ionicon"}
              color={actualColor}
              size={10}
              style={{
                marginRight: 10
              }}
            />
            <Text style={styles.buttonLabel}>{`${hours} Hours`}</Text>
          </View>
          <View style={styles.button}>
            <Icon
              name={"star-outline"}
              type={"ionicon"}
              color={actualColor}
              size={12}
              style={{
                marginRight: 10
              }}
            />
            <Text style={styles.buttonLabel}>
              {rate}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
