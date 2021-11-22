
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { useSelector } from "react-redux";

import Home from "../Home/HomeController";
import Documents from "../Documents/DocumentsController";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

export default function NavigationTabScreen() {
    const colors = useSelector(state => state.colors);
    const activeColor = colors.black;
    const inactiveColor = colors.border;

    function HomeScreen() {
        return (
            <Stack.Navigator initialRouteName="Home2">
                <Stack.Screen
                    name="Home2"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
    }

    function DocumentsScreen() {
        return (
            <Stack.Navigator initialRouteName="Documents2">
                <Stack.Screen
                    name="Documents2"
                    component={Documents}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator >
        )
    }
    return (
        <NavigationContainer
            theme={{ colors: { background: colors.background } }}
        >
            <StatusBar
                backgroundColor={colors.background}
                barStyle={colors.background === '#ffffff' ? 'dark-content' : 'light-content'}
            />

            <Tab.Navigator
                initialRouteName="History"
                activeColor={colors.accent}
                inactiveColor={colors.border}
                barStyle={{ backgroundColor: colors.background }}
            >
                <Tab.Screen name="Home"
                    component={HomeScreen}
                    // initialParams={{ settings: settings }}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Icon
                                    name={focused ? "ellipse" : "ellipse-outline"}
                                    type="ionicon"
                                    color={focused ? activeColor : inactiveColor}
                                />
                            )
                        }
                    }} />
                <Tab.Screen name="Document" component={DocumentsScreen}
                    // initialParams={{ settings: settings }}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Icon
                                    name={focused ? "ellipse" : "ellipse-outline"}
                                    type="ionicon"
                                    color={focused ? activeColor : inactiveColor}
                                />

                            )
                        }
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );

}