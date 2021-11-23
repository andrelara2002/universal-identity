import React from "react";

import RegisterView from "./RegisterView";
import { Platform, Image } from "react-native";
import Loading from "../../components/loading/Loading";

import * as ImagePicker from "expo-image-picker";

import api from "../../services/api";
import moment from "moment";

export default function RegisterController(props) {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [documentNumber, setDocumentNumber] = React.useState("");
  const [documentType, setDocumentType] = React.useState("");
  const [emissionDate, setEmissionDate] = React.useState("");
  const [image, setImage] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

  const getImageFromGallery = async () => {
    console.log("GETTING IMAGE");
    try {

      if (Platform.OS !== 'web') {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
      }

      let pickerResult = await ImagePicker.launchImageLibraryAsync();

      if (pickerResult.cancelled === true) {
        return;
      }

      setImage(pickerResult.uri);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSignUp() {
    try {
      setLoading(true);
      let genderInt = 0;
      let documentTypeInt = 0;
      let birthDateEnUS = "";
      let emissionDateEnUS = "";

      if (gender == "Female") {
        genderInt = 1;
      } else if (gender == "Male") {
        genderInt = 2;
      }

      if (documentType == "RG") {
        documentTypeInt = 1;
      } else if (documentType == "CPF") {
        documentTypeInt = 2;
      } else if (documentType == "CNH") {
        documentTypeInt = 3;
      } else if (documentType == "Passport") {
        documentTypeInt = 4;
      }

      if (birthDate) {
        let birthDatePtBR = moment(birthDate, "DD/MM/YYYY");
        birthDateEnUS = birthDatePtBR.format("YYYY-MM-DD");
      }

      if (emissionDate) {
        let emissionDatePtBR = moment(emissionDate, "DD/MM/YYYY");
        emissionDateEnUS = emissionDatePtBR.format("YYYY-MM-DD");
      }
      const data = {
        nome: name,
        dataNascimento: birthDateEnUS,
        genero: genderInt,
        documentoNumero: documentNumber,
        documentoTipo: documentTypeInt,
        documentoDataEmissao: emissionDateEnUS,
        email: email,
        senha: password,
        imagemPerfilBase64: image || ""
      };

      console.log(data);

      const loginResponse = await api
        .post("/login/create", data)
        .catch(function (error) {
          return error.response;
        });

      console.log(loginResponse.data);

      if (loginResponse.data.succeeded == false) {
        setLoading(false);
        setErrorMessage(loginResponse.data.errors.join("\r\n"));
        setModalVisible(true);
        return;
      }

      props.navigation.goBack();
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }

  React.useEffect(
    () => {
      setLoading(false);
    },
    [setLoading, setImage]
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <RegisterView
      getImageFromGallery={getImageFromGallery}
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      email={email}
      setEmail={setEmail}
      birthDate={birthDate}
      setBirthDate={setBirthDate}
      gender={gender}
      setGender={setGender}
      documentNumber={documentNumber}
      setDocumentNumber={setDocumentNumber}
      documentType={documentType}
      setDocumentType={setDocumentType}
      emissionDate={emissionDate}
      setEmissionDate={setEmissionDate}
      image={image}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      errorMessage={errorMessage}
      onSubmit={handleSignUp}
    />
  );
}
