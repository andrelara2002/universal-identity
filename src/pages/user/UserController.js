import React from "react";

import { Restart } from "fiction-expo-restart";
import { deleteStorageAsync } from "../../services/storage";
import Loading from "../../components/loading/Loading";
import { getUserFromApi } from "../../services/storage";
import UserView from "./UserView";

export default function UserController(props) {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetchUser();
  });

  const fetchUser = async () => {
    const user = await getUserFromApi();
    setUser(user);
    setLoading(false);
  };

  const editUser = () => {
    props.navigation.navigate("EditUser", { user: user });
  };

  const logout = async () => {
    await deleteStorageAsync();
    Restart();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <UserView ediUser={editUser} logout={logout} userData={user.data.data} />
  );
}
