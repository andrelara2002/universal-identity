import React, { useEffect } from "react";
//Default Components
import {
  View,
  ScrollView,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
  Text
} from "react-native";
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Spacer from "../../components/spacer/Spacer";
import DocumentsStyles from "./DocumentsStyles";
import { getColors } from "../../util/CustomHooks";
import Button from "../../components/button/Button";
import LabelWithSubText from "../../components/labelWithSubtext/LabelWithSubtext";
import { Clipboard } from "react-native";

export default function DocumentsView(props) {
  const { getImageFromGallery, image, onSubmit } = props;
  const colors = getColors();
  const styles = DocumentsStyles(colors);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onChangeForm = value => {
    props.onChangeForm({ ...props.form, ...value });
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.containerImage}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={styles.qrCode}
              source={{
                uri: `data:image/png;base64,${props.form.qrCode}`
              }}
            />
          </TouchableOpacity>
        </View>

        <LabelWithSubText
          subText={"Unified ID"}
          label={props.form.universalId}
          size={Dimensions.get("window").height > 600 ? 32 : 20}
          height={Dimensions.get("window").height > 600 ? 60 : 50}
        />

        <InputWithSubText
          subText={"Register Date"}
          disabled={true}
          value={props.form.registerDate}
          onChangeText={value => onChangeForm({ registerDate: value })}
        />

        <InputWithSubText
          subText={"Document Number"}
          disabled={true}
          value={props.form.documentNumber}
          onChangeText={value => onChangeForm({ documentNumber: value })}
        />

        <View style={styles.containerData}>
          <View style={styles.dividedView}>
            <InputWithSubText
              subText={"Check Date"}
              size={"48%"}
              disabled={true}
              value={props.form.checkDate}
              onChangeText={value => onChangeForm({ checkDate: value })}
            />

            <InputWithSubText
              subText={"Birth Date"}
              size={"48%"}
              disabled={true}
              value={props.form.emissionDate}
              onChangeText={value => onChangeForm({ emissionDate: value })}
            />
          </View>

          <View style={styles.dividedView}>
            <InputWithSubText
              subText={"Emission Date"}
              size={"48%"}
              disabled={true}
              value={props.form.emissionDate}
              onChangeText={value => onChangeForm({ emissionDate: value })}
            />

            <InputWithSubText
              value={props.form.gender}
              subText={"Gender"}
              disabled={true}
              size={"48%"}
              onChangeText={value => onChangeForm({ gender: value })}
              picker={true}
              pickerData={["Others", "Male", "Female"]}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        // presentationStyle={'fullScreen'}
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
                  uri: `data:image/png;base64,${props.form.qrCode}`
                }}
              />
              <InputWithSubText
                subText={"Unified ID"}
                disabled={true}
                copy={true}
                value={props.form.universalId}
                onChangeText={value => onChangeForm({ universalId: value })}
              />
              <Button
                text={copied ? "Copied" : "Copy"}
                outline={copied}
                onPress={() => {
                  Clipboard.setString(props.form.universalId);
                  setCopied(true);
                }}
              />
            </Pressable>
          </View>
        </View>
      </Modal>

      {Dimensions.get("window").height > 700 ? <Spacer size={50} /> : <View />}
    </ScrollView>
  );
}
