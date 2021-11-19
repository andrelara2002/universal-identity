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
  const [documentTypeMask, setDocumentTypeMask] = React.useState("");
  const [documentMask, setDocumentMask] = React.useState(true);

  const handleDocumentType = text => {
    props.setDocumentType(text);
    switch (text) {
      case "CPF":
        setDocumentTypeMask([
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          ".",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/
        ]);
      case "RG":
        setDocumentTypeMask([
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/
        ]);
      case "Passport":
        setDocumentMask(false);
    }
    console.log(documentTypeMask);
  };

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
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          size={"48%"}
          onChangeText={props.setBirthDate}
        />
        <InputWithSubText
          value={props.gender}
          subText={"Gender"}
          size={"48%"}
          onChangeText={props.setGender}
          picker={true}
          pickerData={["Male", "Female"]}
        />
      </View>
      <InputWithSubText
        value={props.documentNumber}
        subText={"Document Number"}
        onChangeText={props.setDocumentNumber}
        mask={documentTypeMask}
      />
      <View style={styles.dividedView}>
        <InputWithSubText
          value={props.documentType}
          subText={"Document Type"}
          onChangeText={x => handleDocumentType(x)}
          picker={true}
          pickerData={["CPF", "RG", "Passport"]}
          size={"45%"}
        />
        <InputWithSubText
          value={props.emissionDate}
          subText={"Emission Date"}
          onChangeText={props.setEmissionDate}
          mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
          size={"45%"}
        />
      </View>
      <Divisor height={50} />
      <Button text={"Register"} onPress={onSubmit} />
      {Dimensions.get("window").height > 700 ? <Spacer size={50} /> : <View />}
    </ScrollView>
  );
}
