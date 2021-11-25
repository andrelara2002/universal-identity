import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SplashScreen from "./pages/Splash/SplashController";
import LoginScreen from "./pages/Login/LoginController";
import RegisterScreen from "./pages/Register/RegisterController";
import NavigationTabScreen from "./pages/NavigationTab/NavigationTabScreen";

const AppStack = createStackNavigator(
  {
    Splash: { screen: SplashScreen, navigationOptions: { headerShown: false } },
    SignIn: { screen: LoginScreen, navigationOptions: { headerShown: false } },
    SignUp: RegisterScreen,
    App: { screen: NavigationTabScreen, navigationOptions: { headerShown: false } }
  },
  {
    initialRouteName: "Splash",
    headerMode: "screen",
    headerShown: true
  }
);

const RootStackContainer = createAppContainer(AppStack);

export default RootStackContainer;
