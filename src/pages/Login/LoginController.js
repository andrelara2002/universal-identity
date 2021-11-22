import React from "react";

import LoginView from "./LoginView";
import Loading from "../../components/loading/Loading";
import api from '../../services/api'
import { setTokenAsync, getTokenAsync, setCredentialsAsync, getCredentialsAsync } from "../../services/storage";

export default function LoginControler(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState(null);

  async function autenticate() {
    setLoading(true);
    await api.post('/login', {
      email: username,
      senha: password
    })
      .then((response) => {

        setTokenAsync({ token: response.data.token });

        setCredentialsAsync({
          email: username,
          senha: password
        });

        props.navigation.navigate("Splash")
      })
      .catch((error) => {
        setErrorMessage('Usuário ou senha inválidos.')
        console.log(error)        
      })
      .finally(() => {
        setLoading(false);
      })
  };

  React.useEffect(() => {
    setLoading(false);
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
