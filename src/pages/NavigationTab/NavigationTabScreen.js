import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";

import Home from "../Home/HomeController";
import Documents from "../Documents/DocumentsController";
import RegisterActivity from "../RegisterActivity/RegisterActivityController";
import User from "../User/UserController";
import SearchProfessional from "../SearchProfessional/SearchProfessionalController";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function NavigationTabScreen() {
  const colors = useSelector(state => state.colors);
  const activeColor = colors.black;
  const inactiveColor = colors.border;



  function SearchScreen() {
    return (
      <Stack.Navigator initialRouteName="Search2">
        <Stack.Screen
          name="Search2"
          component={SearchProfessional}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="RegisterActivity"
          component={RegisterActivity}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={{ colors: { background: colors.background } }}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={
          colors.background === "#ffffff" ? "dark-content" : "light-content"
        }
      />

      <Tab.Navigator
        initialRouteName="History"
        activeColor={colors.black}
        inactiveColor={colors.border}
        barStyle={{ backgroundColor: colors.background }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name={focused ? "home" : "home-outline"}
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor}
                />
              );
            }
          }}
        />

        <Tab.Screen
          name="Document"
          component={Documents}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name={focused ? "document" : "document-outline"}
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor}
                />
              );
            }
          }}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name={focused ? "search" : "search-outline"}
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor}
                />
              );
            }
          }}
        />

        <Tab.Screen
          name="Settings"
          component={User}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Icon
                  name={focused ? "person" : "person-outline"}
                  type="ionicon"
                  color={focused ? activeColor : inactiveColor}
                />
              );
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
