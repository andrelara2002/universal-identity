import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./api";

//login data
export async function getTokenAsync() {
  try {
    return JSON.parse(await AsyncStorage.getItem("token"));
  } catch (e) {
    throw e;
  }
}

export async function setTokenAsync(userToken) {
  try {
    return await AsyncStorage.setItem("token", JSON.stringify(userToken));
  } catch (e) {
    throw e;
  }
}

//user data
export async function getUserAsync() {
  try {
    return JSON.parse(await AsyncStorage.getItem("user"));
  } catch (e) {
    throw e;
  }
}

export async function setUserAsync(user) {
  try {
    return await AsyncStorage.setItem("user", user);
  } catch (e) {
    throw e;
  }
}

//credentials data
export async function getCredentialsAsync() {
  try {
    return JSON.parse(await AsyncStorage.getItem("credentials"));
  } catch (e) {
    throw e;
  }
}

export async function setCredentialsAsync(credentials) {
  try {
    return await AsyncStorage.setItem(
      "credentials",
      JSON.stringify(credentials)
    );
  } catch (e) {
    throw e;
  }
}

export async function deleteStorageAsync() {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
}

export async function getUserFromApi() {
  try {
    const user = await api.get("/Pessoa");
    return user.data.data;
  } catch (e) {
    console.log("falha ao recuperar usuário");
    throw e;
  }
}

export async function setActivityToApi(data) {
  const user = await api
    .post("/Atividade/Create", data)
    .then(res => res.data)
    .catch(err => console.log(err.response));
  return user;
}

export async function getAtividadesFromApi(pageNumber) {

  const user = await api.get("/Atividade/GetAll?PageNumber=" + pageNumber)
    .catch((error) => {
      console.log({ "GET Atividade-error": error })
    });

  console.log({ "GET Atividade-response-data": user.data.data })
  return user.data.data;
}
