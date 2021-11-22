import React from "react";
//Native Components
import { View, Text, Image, FlatList } from "react-native";
//Custom Components
import HomeStyles from "./HomeStyles";
import ProfissionalCard from "../../components/profissionalCard/ProfissionalCard";
import Spacer from "../../components/spacer/Spacer";
import JobComponent from "../../components/jobComponent/JobComponent";
//Functions and Hooks
import { getSaudation } from "../../util/InterfaceInfo";

export default function HomeView(props) {
  const { image, borderImage, userData } = props;
  const { nome } = userData;

  const styles = HomeStyles(borderImage);
  const history = [
    {
      id: 1,
      title: "Time de limpeza",
      place: "Restaurante do Mané",
      hours: "10",
      rate: 5,
      description:
        "Ajuda no time de limpeza, do restaurante, trabalhando em time juntamente com outros profissionais",
      observations:
        "“Profissional se dedicou muito para trabalhar em equipes, e se conseguiu êxito em todas as atividades, com excêlencia!”"
    }
  ];

  React.useEffect(() => {
    console.log(userData);
  });

  const mountImage = () => {
    if (image) {
      return (
        <Image style={styles.image} source={userData.imagemPerfilBase64} />
      );
      {
        /* <Image source={{uri: `data:image/gif;base64,${encodedData}`}} /> */
      }
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
            <JobComponent
              key={item.id}
              title={item.title}
              place={item.place}
              hours={item.hours}
              rate={item.rate}
              description={item.description}
              observations={item.observations}
              tier={item.tier}
            />}
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
        <Text style={styles.name}>
          {nome}
        </Text>
        <ProfissionalCard
          rate={userData.totalAvaliacao}
          hours={20}
          streak={"2 Weeks"}
        />
        <Spacer size={20} />
        <Text style={styles.recentActivity}>Recent Activity</Text>
        {changeHistory()}
      </View>
    </View>
  );
}
