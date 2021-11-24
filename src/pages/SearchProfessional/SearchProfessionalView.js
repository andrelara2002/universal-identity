import React, { useEffect } from "react";
//Default Components
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
  Text
} from "react-native";
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Spacer from "../../components/spacer/Spacer";
import SearchProfessionalStyles from "./SearchProfessionalStyles";
import { getColors } from "../../util/CustomHooks";


export default function SearchProfessionalView(props) {
  const { onSubmit } = props;
  const colors = getColors();
  const styles = SearchProfessionalStyles(colors);

  const onChangeForm = value => {
    props.onChangeForm(value);
  };

  return (
    <View style={styles.container}>
        <View>
          <InputWithSubText
              subText={"Search"}
              value={props.form}
              onChangeText={value => onChangeForm(value)}
          />
        </View>
        <View style={styles.boxHeaderView}>
          <Text style={styles.title}>Encontramos estes profissionais:</Text>
        </View>
    </View>
  );
}
