import React from "react";

import LoginView from "./LoginView";
import Loading from "../../components/loading/Loading";
import api from '../../services/api'
import Toast from 'react-native-toast-message';
import {setTokenAsync} from "../../services/storage";

export default function LoginControler(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  const autenticate = () => {
          return api.post('/login', {
              email: username,
              senha: password
            })
          .then( (response) => {
              setTokenAsync({token: response.data.token});
              props.navigation.navigate("Home");
          })
          .catch( () => {
              Toast.show({
                  type: 'error',
                  text1: 'Not Authorized',
              });
          })
          .finally(() => {
              setLoading(false);
          })
  };

  React.useEffect(() => {
    setLoading(false);
  });

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
      onSubmit={autenticate}
    />
  );
}
