import React from "react";
//Default components
import { ScrollView, Dimensions, Text, View } from "react-native";
import RegisterActivityStyle from "./RegisterActivityStyle";
//Custom components
import InputWithSubText from "../../components/inputWithSubText/InputWithSubText";
import { Rating } from "react-native-ratings";
import HeadLine from "../../components/headLine/HeadLine";
import Button from "../../components/button/Button";
import Spacer from "../../components/spacer/Spacer";

export default function RegisterActivityView(props) {
  const {
    activityName,
    setActivityName,
    description,
    setDescription,
    place,
    setPlace,
    hours,
    setHours,
    observations,
    setObservations,
    onSubmit,
    rating,
    setRating
  } = props;

  const styles = RegisterActivityStyle();

  return (
    <ScrollView style={styles.container}>
      <HeadLine text="Register Activity" />
      <Spacer size={20} />
      <InputWithSubText
        onChangeText={setActivityName}
        value={activityName}
        subText="Activity Name"
      />
      <InputWithSubText
        onChangeText={setDescription}
        value={description}
        subText="Description"
      />
      <InputWithSubText onChangeText={setPlace} value={place} subText="Place" />
      <InputWithSubText
        onChangeText={setHours}
        value={hours}
        subText="Horas trabalhadas"
      />
      <InputWithSubText
        onChangeText={setObservations}
        value={observations}
        subText="Observations"
      />

      <View style={styles.RatingBox}>
        <Text style={styles.RatingText}>Rate the profissional!</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={30}
          onFinishRating={rating => setRating(rating)}
        />
      </View>
      <Button onPress={onSubmit} text={"Register"} />
    </ScrollView>
  );
}
