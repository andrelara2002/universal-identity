import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home/HomeController";
import Login from "./pages/Login/LoginController";
import Register from "./pages/Register/RegisterController";

const Stack = createNativeStackNavigator();

const defaultOptions = {
  headerShown: false
};

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={defaultOptions} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: true,
            headerTitle: "Register",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20
            }
          }}
        />
        <Stack.Screen name="Home" component={Home} options={defaultOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
