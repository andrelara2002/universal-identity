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
  const colors = getColors();
  const styles = DocumentsStyles(colors);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

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

        <LabelWithSubText
          subText={"Register Date"}
          label={props.form.registerDate}
        />

        <LabelWithSubText
          subText={"Document Number"}
          label={props.form.documentNumber}
        />

        <View style={styles.containerData}>
          <View style={styles.dividedView}>
            <LabelWithSubText
              subText={"Check Date"}
              width={"48%"}
              label={props.form.checkDate}
            />

            <LabelWithSubText
              subText={"Birth Date"}
              width={"48%"}
              label={props.form.emissionDate}
            />
          </View>

          <View style={styles.dividedView}>
            <LabelWithSubText
              subText={"Emission Date"}
              width={"48%"}
              label={props.form.emissionDate}
            />

            <LabelWithSubText
              label={props.form.gender}
              width={"48%"}
              subText={"Gender"}
            />
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
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
              <LabelWithSubText
                subText={"Unified ID"}
                label={props.form.universalId}
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
