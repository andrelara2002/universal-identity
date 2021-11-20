import React, {useEffect} from "react";
//Default Components
import { View, ScrollView, Dimensions, Image, Pressable, TouchableOpacity,Modal, Text } from "react-native";
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Spacer from "../../components/spacer/Spacer";
import DocumentsStyles from "./DocumentsStyles";
import { getColors } from "../../util/CustomHooks";


export default function DocumentsView(props) {
  const { getImageFromGallery, image, onSubmit } = props;
  const colors = getColors();
  const styles = DocumentsStyles(colors);
  const [modalVisible, setModalVisible] = React.useState(false);

  const onChangeForm = (value) => {
      props.onChangeForm({...props.form, ...value})
  }

  return (
    <ScrollView style={styles.container}>

      <View>
          <View style={styles.containerImage}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image
                      style={styles.qrCode}
                      source={{
                          uri: `data:image/png;base64,${props.form.qrCode}`,
                      }}
                  />
              </TouchableOpacity>
          </View>

          <InputWithSubText
            subText={"Unified ID"}
            disabled={true}
            value={props.form.id}
            onChangeText={(value) => onChangeForm({id: value}) }
          />

          <InputWithSubText
              subText={"Register Date"}
              disabled={true}
              value={props.form.registerDate}
              onChangeText={(value) => onChangeForm({registerDate: value}) }
          />

          <InputWithSubText
              subText={"Document Number"}
              disabled={true}
              value={props.form.documentNumber}
              onChangeText={(value) => onChangeForm({documentNumber: value}) }
          />

          <View style={styles.containerData}>
              <InputWithSubText
                  subText={"Check Date"}
                  size={"48%"}
                  disabled={true}
                  value={props.form.checkDate}
                  onChangeText={(value) => onChangeForm({checkDate: value}) }
              />

              <InputWithSubText
                  subText={"Birth Date"}
                  size={"48%"}
                  disabled={true}
                  value={props.form.emissionDate}
                  onChangeText={(value) => onChangeForm({emissionDate: value}) }
              />

              <InputWithSubText
                  subText={"Emission Date"}
                  size={"48%"}
                  disabled={true}
                  value={props.form.emissionDate}
                  onChangeText={(value) => onChangeForm({emissionDate: value}) }
              />

              <InputWithSubText
                  value={props.form.gender}
                  subText={"Gender"}
                  disabled={true}
                  size={"48%"}
                  onChangeText={(value) => onChangeForm({gender: value}) }
                  picker={true}
                  pickerData={["Others", "Male", "Female"]}
              />
          </View>
      </View>

        <Modal
            animationType="slide"
            transparent={true}
            presentationStyle={'fullScreen'}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.viewModal}>
                <View style={styles.viewContentModal}>
                    <Pressable
                        style={styles.viewContentModal}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Image
                            style={styles.qrCodeModal}
                            source={{
                                uri: `data:image/png;base64,${props.form.qrCode}`,
                            }}
                        />
                        <InputWithSubText
                            subText={"Unified ID"}
                            disabled={true}
                            value={props.form.id}
                            onChangeText={(value) => onChangeForm({id: value}) }
                        />
                    </Pressable>
                </View>
            </View>
        </Modal>

        {Dimensions.get("window").height > 700 ? <Spacer size={50} /> : <View />}
    </ScrollView>
  );
}
