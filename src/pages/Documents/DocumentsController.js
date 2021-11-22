import React, { useEffect } from "react";
import { Alert } from 'react-native'

import DocumentsView from "./DocumentsView";
import { Platform } from "react-native";
import Loading from "../../components/loading/Loading";
import api from '../../services/api'
import * as ImagePicker from "expo-image-picker";
import moment from "moment";

export default function DocumentsController(props) {
  const [documentsForm, setDocumentForms] = React.useState({
    id: "",
    registerDate: "",
    name: "",
    documentNumber: "",
    checkDate: "",
    emissionDate: "",
    birthDate: "",
    gender: "",
    qrCode: ""
  })
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
    setLoading(true);
    api.get('/Pessoa')
      .then((response) => {
        const { id, dataCadastro, nome, dataNascimento, genero, documentoNumero, documentoDataEmissao, universalIdBase64, universalId } = response.data.data;
        const gender = ["Others", "Female", "Male"];
        setDocumentForms({
          id: id,
          universalId: universalId,
          registerDate: moment(new Date(dataCadastro)).format("DD/MM/YYYY"),
          name: nome,
          documentNumber: documentoNumero,
          checkDate: "",
          emissionDate: moment(new Date(documentoDataEmissao)).format("DD/MM/YYYY"),
          birthDate: moment(new Date(dataNascimento)).format("DD/MM/YYYY"),
          gender: gender[parseInt(genero)],
          qrCode: universalIdBase64,
        })
      })
      .catch((error) => {
        console.log(error)
        Alert.alert(
          'Aviso',
          error,
          [{ text: 'OK' }],
          { cancelable: false },
        )
      })
      .finally(() => setLoading(false))
  }, [setLoading])


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

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <DocumentsView
        getImageFromGallery={getImageFromGallery}
        form={documentsForm}
        onChangeForm={setDocumentForms}
        image={image}
        onSubmit={() => console.log('teste ok')}
      />

    </>
  );
}
