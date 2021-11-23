import React from "react";

import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { getColors } from "../../util/CustomHooks";

import { Icon } from "react-native-elements";

export default function ButtonWithIcon(props) {
  const colors = getColors().buttons;
  const {
    outline,
    onPress,
    text,
    type = "normal",
    iconName,
    iconSize = 30,
    iconType = "ionicon"
  } = props;

  const baseColor = colors[type];

  const styles = StyleSheet.create({
    button: {
      backgroundColor: outline ? "transparent" : baseColor,
      width: "100%",
      borderRadius: 5,
      padding: 15,
      marginTop: 5,
      marginBottom: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      borderWidth: 1,
      borderColor: outline ? baseColor : "transparent"
    },
    text: {
      color: text,
      fontSize: 20,
      fontWeight: "bold",
      color: outline ? baseColor : colors.text
    },
    icon: {
      marginRight: 10
    }
  });

  return (
    <TouchableOpacity style={styles.button}>
      <Icon
        name={iconName}
        type={iconType}
        color={text}
        size={iconSize}
        style={styles.icon}
      />
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}
