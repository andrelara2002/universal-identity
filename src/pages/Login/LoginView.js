import React from "react";
//Native Components
import { View, Image } from "react-native";
//Custom Components
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Button from "../../components/button/Button";
import Divisor from "../../components/divisor/Divisor";
import HeadLine from "../../components/headLine/HeadLine";
import SubText from "../../components/subText/SubText";
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
  subText
}) {
  const colors = getColors();
  const styles = LoginStyles(colors);

  const redirectSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image source={waves} style={styles.waves} />
      <SubText text={subText} size={26} />
      <HeadLine multiline={true} text={text} />
      <Spacer size={80} />
      <InputWithSubText
        subText={"Email"}
        value={username}
        onChangeText={setUsername}
      />
      <InputWithSubText
        subText={"Password"}
        value={password}
        onChangeText={setPassword}
      />
      <Divisor height={50} color={colors.subText} />
      <Button text={"Log in"} onPress={onSubmit} />
      <Button text={"Sign up"} onPress={redirectSignUp} outline={true} />
    </View>
  );
}
[];
