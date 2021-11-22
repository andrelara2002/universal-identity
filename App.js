import React from "react";

import Navigator from "./src/routes";
import { Provider } from "react-redux";

import store from "./src/services/store";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <Navigator />
            </Provider>
        </>

    );
}
