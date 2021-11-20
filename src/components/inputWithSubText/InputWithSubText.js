import React from "react";

import { View, StyleSheet } from "react-native";

import SubText from "../subText/SubText";
import { Input } from "../input/Input";
import { getColors } from "../../util/CustomHooks";
import { Picker } from "@react-native-picker/picker";

export default function InputWithSubText({
  value,
  subText,
  onChangeText,
  size,
  secureTextEntry,
  placeholder,
  mask,
  picker,
  pickerData,
  disabled = false
}) {
  const { card, text } = getColors();

  const styles = StyleSheet.create({
    InputWithSubText: {
      flexDirection: "column",
      justifyContent: "space-between",
      width: size ? size : "100%"
    },
    Picker: {
      backgroundColor: card,
      borderRadius: 5,
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: "bold",
      height: 50,
      width: "100%",
      color: text
    },
  });
  const setTipe = () => {
    if (picker) {
      return (
        <Picker
          selectedValue={value}
          disabled={disabled}
          onValueChange={onChangeText}
          style={styles.Picker}
        >
          {pickerData.map(item =>
            <Picker.Item label={item} value={item} key={pickerData.indexOf(item)} />
          )}
        </Picker>
      );
    } else {
      return (
        <Input
          mask={mask}
          value={value}
          disabled={disabled}
          onChangeText={onChangeText}
          secureTextEntry={
            subText.toLowerCase() == "password" ? true : secureTextEntry
          }
          placeholder={placeholder}
        />
      );
    }
  };

  return (
    <View style={styles.InputWithSubText}>
      <SubText text={subText} />
      {setTipe()}
    </View>
  );
}
