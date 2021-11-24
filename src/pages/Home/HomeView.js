import React from "react";
//Native Components
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView
} from "react-native";
//Custom Components
import HomeStyles from "./HomeStyles";
import ProfissionalCard from "../../components/profissionalCard/ProfissionalCard";
import Spacer from "../../components/spacer/Spacer";
import JobComponent from "../../components/jobComponent/JobComponent";
import Button from "../../components/button/Button";
import { useNavigation } from "@react-navigation/native";
//Functions and Hooks
import { getSaudation } from "../../util/InterfaceInfo";
import { getMonthText, getWeekText } from "../../util/CustomHooks";

export default function HomeView(props) {
  const { borderImage, userData, atividadesData, loadAtividades } = props;
  const { nome } = userData;
  const navigation = useNavigation();

  const styles = HomeStyles(
    setTier(userData.totalAvaliacao, userData.totalHorasTrabalhadas)
  );

  React.useEffect(() => {});

  function setTier(rate, hours) {
    if (rate > 4) {
      return "excelent";
    } else if (rate > 3) {
      return "great";
    } else if (rate >= 2) {
      return "good";
    } else if (rate <= 1 && hours < 40) {
      return "good";
    } else {
      return "bad";
    }
  }

  const changeHistory = () => {
    if (atividadesData.length > 0) {
      return (
        <SafeAreaView>
          <FlatList
            data={atividadesData}
            onEndReached={loadAtividades}
            onEndReachedThreshold={0.1}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <JobComponent
                key={item.id}
                title={item.titulo}
                place={item.local}
                hours={item.horasTrabalhadas}
                rate={item.avaliacao}
                description={item.descricao}
                observations={item.observacao}
                tier={setTier(item.avaliacao)}
              />}
          />
          <Text style={{ alignSelf: "center", marginTop: 10 }}>
            Keep doing your best✌️
          </Text>
        </SafeAreaView>
      );
    } else {
      return <Text style={{ color: "#000" }}>Ainda nenhum histórico</Text>;
    }
  };

  const getDate = () => {
    const date = new Date();
    const weekDay = date.getDay();
    const week = getWeekText(weekDay);
    const month = getMonthText(weekDay);

    return `${week}, ${month} ${weekDay}`;
  };

  const getName = () => {
    const indexOf = nome.indexOf(" ");
    console.log({ indexOf: indexOf });
    if (indexOf > 0) {
      return nome.substr(0, nome.indexOf(" "));
    } else {
      return nome;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Spacer size={20} />
      <Text style={styles.saudation}>Hello!</Text>
      <Spacer size={40} />
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.image}
            source={{
              uri: `${userData.imagemPerfilBase64}`
            }}
          />
          <View style={{ flexDirection: "column", marginLeft: 20 }}>
            <Text style={styles.name}>
              {getName()}
            </Text>
            <Text style={styles.date}>{getDate()}</Text>
          </View>
        </View>
        <Spacer size={40} />
        <ProfissionalCard
          rate={userData.totalAvaliacao}
          hours={userData.totalHorasTrabalhadas}
          /* streak={"2 Weeks"} */
        />
        <Spacer size={20} />
        <Text style={styles.recentActivity}>Recent Activity</Text>
        {changeHistory()}
      </View>
    </ScrollView>
  );
}
