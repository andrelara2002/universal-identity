import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NavigationActions } from 'react-navigation'

//login data
export async function getTokenAsync() {
  try {
    return JSON.parse(await AsyncStorage.getItem('token'));
  } catch (e) {
    throw e;
  }
}

export async function setTokenAsync(userToken) {
  try {
    return await AsyncStorage.setItem('token', JSON.stringify(userToken));
  } catch (e) {
    throw e;
  }
}

//user data
export async function getUserAsync() {
  try {
    return JSON.parse(await AsyncStorage.getItem('user'));
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

export async function deleteStorageAsync() {
  try {
    return await AsyncStorage.clear();
  } catch (e) {
    throw e;
  }
}

// NavigationService

// let navigator;

// export function setTopLevelNavigator(navigatorRef) {
//   navigator = navigatorRef;
// }

// export function navigate(routeName, params) {
//   navigator.dispatch(
//     NavigationActions.navigate({
//       routeName,
//       params,
//     }),
//   );
// }