import React from "react";
//Default Components
import { View, ScrollView, Dimensions } from "react-native";
import { Alert, Modal, StyleSheet, Text, Pressable } from "react-native";

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
  const {
    getImageFromGallery,
    image,
    onSubmit,
    modalVisible,
    errorMessage
  } = props;
  const colors = getColors();
  const styles = RegisterStyles(colors);

  return (
    <ScrollView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {errorMessage}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}> Ok </Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <ImageButton
        source={image}
        tier={"excelent"}
        text={"Change Image"}
        onPress={async () => await getImageFromGallery()}
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
          pickerData={["Others", "Male", "Female"]}
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
          picker={true}
          pickerData={["Others", "RG", "CPF", "CNH", "Passport"]}
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
