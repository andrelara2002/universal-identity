import React from "react";

import { StackActions, NavigationActions } from "react-navigation";
import { deleteStorageAsync } from "../../services/storage";

import { getUserFromApi } from "../../services/storage";

import UserView from "./UserView";

export default function UserController(props) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  });

  const editUser = () => {
    getUserFromApi().then(user => {
      props.navigation.navigate("EditUser", { user: user });
    });
  };

  const logout = () => {
    deleteStorageAsync();
    props.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "SignIn" })]
      })
    );
  };

  return <UserView ediUser={editUser} logout={logout} />;
}
