import React from "react";

import RegisterView from "./RegisterView";
import { Platform } from "react-native";
import Loading from "../../components/loading/Loading";

import * as ImagePicker from "expo-image-picker";

import api from '../../services/api'

export default function RegisterController(props) {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [documentNumber, setDocumentNumber] = React.useState("");
  const [documentType, setDocumentType] = React.useState("");
  const [emissionDate, setEmissionDate] = React.useState("");
  const [image, setImage] = React.useState(null);

  const [loading, setLoading] = React.useState(true);

  const getImageFromGallery = async () => {
    try {
      if (Platform.OS !== "web") {
        const {
          status
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
        });

        console.log(result);

        if (!result.cancelled) {
          setImage(result.uri);
        }
      } else {
        alert("Sorry, this feature is not available in the web version!");
        console.log("Web not supported");
      }
    } catch (error) {
      console.log(error);
      console.log("Device Incompatible");
    }
  };

  async function handleSignUp() {

    try {
      setLoading(true);
      let genderInt = 0;
      if (gender == 'Female') {
        genderInt = 1;
      } else if (gender == 'Male') {
        genderInt = 2;
      }

      let documentTypeInt = 0;
      if (documentType == 'RG') {
        documentTypeInt = 1;
      } else if (documentType == 'CPF') {
        documentTypeInt = 2;
      } else if (documentType == 'CNH') {
        documentTypeInt = 3;
      } else if (documentType == 'Passport') {
        documentTypeInt = 4;
      }

      const data = {
        'nome': name,
        'dataNascimento': birthDate,
        'genero': genderInt,
        'documentoNumero': documentNumber,
        'documentoTipo': documentTypeInt,
        'documentoDataEmissao': emissionDate,
        'email': email,
        'senha': password,
        'imagemPerfilBase64': "string"
      }

      console.log(data);

      const loginResponse = await api.post('/login/create', data)
        .catch(function (error) {
          return error.response;
        });

      console.log(loginResponse.data)
      props.navigation.goBack();
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  }

  React.useEffect(() => {
    setLoading(false);
  });


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
      onSubmit={handleSignUp}
    />
  );
}
