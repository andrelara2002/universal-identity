import React from "react";

import { View, Text, Image } from "react-native";
import HomeStyles from "./HomeStyles";

export default function HomeView(props) {
  const { image } = props;

  const styles = HomeStyles();

  const mountImage = () => {
    if (image) {
      return <Image style={styles.image} source={image} />;
    } else {
      return <View style={styles.replacedImage} />;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {mountImage()}
        <Text style={styles.saudation}>Bom dia</Text>
        <Text style={styles.name}>Bartolomeu!</Text>
      </View>
    </View>
  );
}
