import React from "react";
//Native Components
import { View, Image } from "react-native";
//Custom Components
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Button from "../../components/button/Button";
import Divisor from "../../components/divisor/Divisor";
import HeadLine from "../../components/headLine/HeadLine";
import SubText from "../../components/subText/SubText";
import Error from '../../components/Error/Error';
//Functions and Hooks
import LoginStyles from "./LoginStyles";
import { getColors } from "../../util/CustomHooks";
import Spacer from "../../components/spacer/Spacer";
//Assets
import waves from "../../../assets/waves.png";

export default function LoginView({
  username,
  password,
  setUsername,
  setPassword,
  onSubmit,
  navigation,
  text,
  subText,
  errorMessage
}) {
  const colors = getColors();
  const styles = LoginStyles(colors);

  const redirectSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <Image source={waves} style={styles.waves} />
      <SubText text={subText} size={26} />
      <HeadLine multiline={true} text={text} />
      <Spacer size={errorMessage ? 51 : 80} />
      
      {!!errorMessage && <Error errorMessage={errorMessage} />}

      <InputWithSubText
        subText={"Document Number"}
        value={username}
        keyboardType={"numeric"}
        returnKeyType={"next"}
        onChangeText={setUsername}
      />
      <InputWithSubText
        subText={"Password"}
        value={password}
        keyboardType={"numeric"}
        returnKeyType={"next"}
        onChangeText={setPassword}
      />
      <Divisor height={50} color={colors.subText} />
      <Button text={"Log in"} onPress={onSubmit} />
      <Button text={"Sign up"} onPress={redirectSignUp} outline={true} />
    </View>
  );
}
[];
