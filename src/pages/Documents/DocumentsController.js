import React, {useEffect} from "react";

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
    checkDate:"",
    emissionDate: "",
    birthDate: "",
    gender: ""
  })
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(true);


  useEffect(() => {
    setLoading(true);
    api.get('/Pessoa')
        .then((response) => {
          const {id, nome,dataNascimento, genero, documentoNumero,  documentoDataEmissao,} = response.data.data;
          const gender = ["Others", "Male", "Female"];
          setDocumentForms({
            id: id,
            registerDate: "-",
            name: nome,
            documentNumber: documentoNumero,
            checkDate:"",
            emissionDate: moment(new Date(documentoDataEmissao)).format("DD/MM/YYYY"),
            birthDate: moment(new Date(dataNascimento)).format("DD/MM/YYYY"),
            gender: gender[parseInt(genero)]
          })
        })
        .catch(() => {
          Toast.show({
            type: "error",
            text1: "Data not found"
          });
        })
        .finally(setLoading(false))
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

  React.useEffect(() => {
    setLoading(false);
  });


  if (loading) {
    return <Loading />;
  }

  return (
    <DocumentsView
      getImageFromGallery={getImageFromGallery}
      form={documentsForm}
      onChangeForm={setDocumentForms}
      image={image}
      onSubmit={() => console.log('teste ok')}
    />
  );
}
