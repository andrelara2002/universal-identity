import React from "react";

import Navigator from "./src/routes";
import { Provider } from "react-redux";
import { Dimensions, View } from "react-native";

import store from "./src/services/store";

export default function App() {
  const deviceWidth = Dimensions.get("window").width;

  return (
    <View
      style={{
        width: deviceWidth > 700 ? 375 : "100%",
        height: deviceWidth > 700 ? 667 : "100%",
        alignSelf: "center",
        justifySelf: "center",
        flexDirection: "column",
        shadowColor: "#000",
        borderRadius: 10,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation:20,
      }}
    >
      <Provider store={store}>
        <Navigator />
      </Provider>
    </View>
  );
}
