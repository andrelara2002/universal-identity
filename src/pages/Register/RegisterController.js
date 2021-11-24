import React from "react";

import RegisterView from "./RegisterView";
import { Platform, Image } from "react-native";
import Loading from "../../components/loading/Loading";
import * as FileSystem from "expo-file-system";

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
  const [image, setImage] = React.useState("data:image/png;base64,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");
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

      if (Platform.OS !== 'web') {
        const base64 = await FileSystem.readAsStringAsync(pickerResult.uri, {
          encoding: "base64"
        });
        setImage(base64);
      } else {
        setImage(pickerResult.uri)
      }
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
        imagemPerfilBase64: image
      };

      console.log(data);

      const loginResponse = await api
        .post("/login/create", data)
        .catch(function (error) {
          return error.response;
        });

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
