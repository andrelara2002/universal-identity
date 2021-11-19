import React from "react";
//Native Components
import { View, Text, Image, FlatList } from "react-native";
//Custom Components
import HomeStyles from "./HomeStyles";
import ProfissionalCard from "../../components/profissionalCard/ProfissionalCard";
import Spacer from "../../components/spacer/Spacer";
//Functions and Hooks
import { getSaudation } from "../../util/InterfaceInfo";

export default function HomeView(props) {
  const { image, borderImage } = props;

  const styles = HomeStyles(borderImage);
  const history = [];

  const mountImage = () => {
    if (image) {
      return <Image style={styles.image} source={image} />;
    } else {
      return <View style={styles.replacedImage} />;
    }
  };

  const changeHistory = () => {
    if (history.length > 0) {
      return (
        <FlatList
          data={history}
          renderItem={({ item }) =>
            <Text>
              {item}
            </Text>}
        />
      );
    } else {
      return <Text>Ainda nenhum histórico</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Spacer size={20} />
      <View>
        {mountImage()}
        <Text style={styles.saudation}>
          {getSaudation()}
        </Text>
        <Text style={styles.name}>Bartolomeu!</Text>
        <ProfissionalCard rate={4.5} hours={20} streak={"2 Weeks"} />
        <Spacer size={20} />
        {changeHistory()}
      </View>
    </View>
  );
}
