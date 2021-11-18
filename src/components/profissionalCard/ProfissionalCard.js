import React from "react";

import { Text, View, StyleSheet } from "react-native";
import { getColors } from "../../util/CustomHooks";

export default function ProfissionalCard(props) {
  const { rate, hours, streak } = props;

  const texts = [`${rate}⭐`, `⏰${hours}`, `🔥${streak}`];
  const { card, text, subtext } = getColors();

  React.useEffect(() => {
    console.log(card);
  });

  const mountTexts = () => {
    return (
      <Text>
        {texts.map((text, index) => {
          return (
            <Text key={index}>
              {text}
              {index !== texts.length - 1
                ? <Text
                    style={{
                      color: "#F3F3F3",
                      marginLeft: 10,
                      marginRight: 10
                    }}
                  >
                    |
                  </Text>
                : ""}
            </Text>
          );
        })}
      </Text>
    );
  };

  return (
    <View style={{ backgroundColor: card, padding: 20, borderRadius: 5 }}>
      <Text style={{ color: text, fontWeight: "bold", marginBottom: 5 }}>
        {"Excelent Profissional"}
      </Text>
      <View>
        <Text>
          {mountTexts()}
        </Text>
      </View>
    </View>
  );
}
