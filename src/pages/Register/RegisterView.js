import React from "react";
//Default Components
import { View, ScrollView, Dimensions } from "react-native";
//Custom Components
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Spacer from "../../components/spacer/Spacer";
import Button from "../../components/button/Button";
import RegisterStyles from "./RegisterStyles";
import Divisor from "../../components/divisor/Divisor";
import ImageButton from "../../components/imageButton/ImageButton";
//Functions and Hooks
import { getColors } from "../../util/CustomHooks";

export default function RegisterView(props) {
  const { getImageFromGallery, image, onSubmit } = props;
  const colors = getColors();
  const styles = RegisterStyles(colors);

  return (
    <ScrollView style={styles.container}>
      <ImageButton
        source={image ? image.uri : null}
        tier={"excelent"}
        text={"Change Image"}
        onPress={getImageFromGallery}
      />
      <InputWithSubText
        subText={"Name"}
        value={props.name}
        onChangeText={props.setName}
      />
      <InputWithSubText
        value={props.password}
        subText={"Password"}
        onChangeText={props.setPassword}
      />
      <InputWithSubText
        value={props.email}
        subText={"Email (Optional)"}
        onChangeText={props.setEmail}
      />
      <View style={styles.dividedView}>
        <InputWithSubText
          value={props.birthDate}
          subText={"Birth Date"}
          size={"48%"}
          onChangeText={props.setBirthDate}
        />
        <InputWithSubText
          value={props.gender}
          subText={"Gender"}
          size={"48%"}
          onChangeText={props.setGender}
        />
      </View>
      <InputWithSubText
        value={props.documentNumber}
        subText={"Document Number"}
        onChangeText={props.setDocumentNumber}
      />
      <View style={styles.dividedView}>
        <InputWithSubText
          value={props.documentType}
          subText={"Document Type"}
          onChangeText={props.setDocumentType}
          size={"45%"}
        />
        <InputWithSubText
          value={props.emissionDate}
          subText={"Emission Date"}
          onChangeText={props.setEmissionDate}
          size={"45%"}
        />
      </View>
      <Divisor height={50} />
      <Button text={"Register"} onPress={onSubmit} />
      {Dimensions.get("window").height > 700 ? <Spacer size={50}/> : <View />}
    </ScrollView>
  );
}
