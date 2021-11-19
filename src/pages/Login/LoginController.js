import React from "react";

import LoginView from "./LoginView";
import Loading from "../../components/loading/Loading";

export default function LoginControler(props) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  const autenticate = async () => {
    setLoading(true);
    props.navigation.navigate("Home");
    setLoading(false);
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
