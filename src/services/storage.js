import { AsyncStorage } from "react-native";

//login data
export async function getToken() {
  return await AsyncStorage.getItem("token");
}

export async function setToken(token) {
  await AsyncStorage.setItem("token", token);
}

//user data
export async function getUser() {
  return await AsyncStorage.getItem("user");
}

export async function setUser(user) {
  return await AsyncStorage.setItem("user", user);
}
