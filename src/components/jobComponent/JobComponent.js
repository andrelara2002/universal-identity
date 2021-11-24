import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

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
      padding: 20,
      flexDirection: "column",
      marginBottom: 10,
      borderRadius: 10,
      height: expand ? 250 : 80,
      marginBottom: 15
    },
    header: {
      flexDirection: "row",
      paddingBottom: 10
    },
    leftHeader: {
      flexDirection: "column",
      alignItems: "flex-start",
      width: "65%"
    },
    rightHeader: {
      flexDirection: "column",
      alignItems: "flex-start",
      width: "35%"
    },
    title: {
      fontSize: 24,
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
    },
    lateralBar: {
      width: 5,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      height: expand ? 250 : 80,
      backgroundColor: borderColor,
      position: "absolute"
    }
  });

  const makeExpand = () => {
    if (expand) {
      return (
        <View>
          <Text style={{ fontSize: 12, fontWeight: "bold", color: text }}>
            Comments:{" "}
          </Text>
          <Text>
            {description}
          </Text>
          <Spacer size={20} />
          <Text style={{ fontSize: 12, fontWeight: "bold", color: text }}>
            Observations:
          </Text>
          <Text style={{ fontSize: 12, fontStyle: "italic", color: text }}>
            {observations ? observations : "No observations"}
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
      <View style={styles.lateralBar} />
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

      <Spacer size={10} />
      {makeExpand()}
    </TouchableOpacity>
  );
}
