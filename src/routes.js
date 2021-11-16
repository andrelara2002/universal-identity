import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home/HomeController";

const Stack = createNativeStackNavigator();

const defaultOptions = {
  headerShown: false
};

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={defaultOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
