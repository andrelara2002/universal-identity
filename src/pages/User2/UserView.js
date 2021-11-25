import React from "react";

import { View } from "react-native";

import ProfissionalCard from "../../components/profissionalCard/ProfissionalCard";
import UserStyles from "./UserStyles";
import ButtonWithIcon from "../../components/buttonWithIcon/ButtonWithIcon";
import Spacer from "../../components/spacer/Spacer";

export default function UserView(props) {
  const styles = UserStyles();
  const { editUser, logout, userData } = props;
  return (
    <View style={styles.container}>
      <Spacer size={20} />
      <ProfissionalCard
        rate={userData.totalAvaliacao}
        hours={userData.totalHorasTrabalhadas}
      />
      <Spacer size={20} />
      <ButtonWithIcon
        iconName="create-outline"
        onPress={editUser}
        text={"Editar Perfil"}
      />
      <ButtonWithIcon
        iconName="exit-outline"
        type="declined"
        onPress={logout}
        text={"Logout"}
        outline={true}
      />
    </View>
  );
}
