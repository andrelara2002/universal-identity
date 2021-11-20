import React from "react";

import Navigator from "./src/routes";
import { Provider } from "react-redux";
import Toast from 'react-native-toast-message';

import store from "./src/services/store";

export default function App() {
  return (
      <>
          <Toast position={'bottom'}/>
          <Provider store={store}>
              <Navigator />
          </Provider>
      </>

  );
}
