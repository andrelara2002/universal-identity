import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import { getColors } from "../../util/CustomHooks";
import Spacer from "../spacer/Spacer";

export default function JobComponent({
  title,
  place,
  hours,
  rate,
  description,
  observations,
  tier
}) {
  const [expand, setExpand] = React.useState(false);
  const { text, card } = getColors();
  const borderColor = getColors().tiers[tier || "excelent"];
  const { width, height } = Dimensions.get("window");
  const styles = StyleSheet.create({
    container: {
      backgroundColor: card,
      borderWidth: 1,
      borderColor: borderColor,
      padding: 20,
      flexDirection: "column",
      marginBottom: 10,
      borderRadius: 10,
      height: expand ? 250 : 75
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#F3F3F3"
    },
    leftHeader: {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    rightHeader: {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: text
    },
    place: {
      fontSize: 12,
      color: text
    },
    hours: {
      fontSize: 18,
      fontWeight: "bold",
      color: text
    }
  });

  const makeExpand = () => {
    if (expand) {
      return (
        <View>
          <Text>
            {description}
          </Text>
          <Spacer size={20} />
          <Text style={{ fontSize: 12, fontWeight: "bold", color: text }}>
            Observations:
          </Text>
          <Text style={{ fontSize: 12, fontStyle: "italic", color: text }}>
            {observations}
          </Text>
        </View>
      );
    }
  };

  const renderRating = () => {
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars.push("⭐");
    }
    return stars.join("");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setExpand(!expand)}
    >
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.place}>
            {place}
          </Text>
        </View>
        <View style={styles.rightHeader}>
          <Text style={styles.hours}>
            {`${hours} hours`}
          </Text>
          <Text style={{ fontSize: 12 }}>
            {renderRating()}
          </Text>
        </View>
      </View>
      {makeExpand()}
    </TouchableOpacity>
  );
}
