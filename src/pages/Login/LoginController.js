import React from "react";

import LoginView from "./LoginView";
import Loading from "../../components/loading/Loading";
import api from '../../services/api'
import Toast from 'react-native-toast-message';
import { setTokenAsync, getTokenAsync, setCredentialsAsync, getCredentialsAsync } from "../../services/storage";
// import { NavigationActions, StackActions } from 'react-navigation';

export default function LoginControler(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const autenticate = () => {
    return api.post('/login', {
      email: username,
      senha: password
    })
      .then((response) => {

        setTokenAsync({ token: response.data.token });

        setCredentialsAsync({
          email: username,
          senha: password
        });

        props.navigation.replace("Home")
      })
      .catch((error) => {
        setErrorMessage('Usuário ou senha inválidos.')
        console.log(error)
        Toast.show({
          type: 'error',
          text1: 'Not Authorized',
        });
      })
      .finally(() => {
        setLoading(false);
      })
  };

  async function refreshToken() {
    const credentials = await getCredentialsAsync();

    if (credentials) {
      const loginResponse = await api.post('/login', credentials)
      await storeUserToken(loginResponse.data);
    }
  }


  React.useEffect(() => {
    async function handleUserNextScreen() {
      const userToken = await getTokenAsync();
      if (userToken) {
        await refreshToken();
        props.navigation.replace("Home")
        //props.navigation.navigate("Home");
      } else {
        setLoading(false);
      }
    }
    
    handleUserNextScreen();
    //setLoading(false);
  }, [[setLoading]]);

  if (loading) {
    return <Loading />;
  }

  return (
    <LoginView
      text={"Let's Begin!"}
      subText={"Welcome"}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      navigation={props.navigation}
      errorMessage={errorMessage}
      onSubmit={autenticate}
    />
  );
}
