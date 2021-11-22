import React from "react";

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'


import SplashScreen from "./pages/Splash/SplashController";
import LoginScreen from "./pages/Login/LoginController";
import RegisterScreen from "./pages/Register/RegisterController";
import NavigationTabScreen from './pages/NavigationTab/NavigationTabScreen'


const AppStack = createStackNavigator(
  {
    Splash: SplashScreen,
    SignIn: LoginScreen,
    SignUp: RegisterScreen,
    App: NavigationTabScreen,
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    headerShown: false,
  },
);

const RootStackContainer = createAppContainer(AppStack)

export default RootStackContainer