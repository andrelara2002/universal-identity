import React, {useEffect} from "react";
//Default Components
import { View, ScrollView, Dimensions, Image } from "react-native";
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import Spacer from "../../components/spacer/Spacer";
import DocumentsStyles from "./DocumentsStyles";
import { getColors } from "../../util/CustomHooks";


export default function DocumentsView(props) {
  const { getImageFromGallery, image, onSubmit } = props;
  const colors = getColors();
  const styles = DocumentsStyles(colors);

  const onChangeForm = (value) => {
      props.onChangeForm({...props.form, ...value})
  }

  return (
    <ScrollView style={styles.container}>
      <View>

          <View style={styles.containerImage}>
              <Image
                  style={styles.qrCode}
                  source={{
                      uri: `data:image/png;base64,${props.form.qrCode}`,
                  }}
              />
          </View>

          <InputWithSubText
            subText={"ID"}
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
      {Dimensions.get("window").height > 700 ? <Spacer size={50} /> : <View />}
    </ScrollView>
  );
}
