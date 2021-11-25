import React from "react";
import { StackActions, NavigationActions } from 'react-navigation'

import Loading from "../../components/loading/Loading";
import api from '../../services/api'
import { getTokenAsync, getCredentialsAsync, setTokenAsync } from "../../services/storage";

export default function SplashController(props) {

    async function refreshToken() {
        const credentials = await getCredentialsAsync();

        if (credentials) {
            const loginResponse = await api.post('/login', credentials)
            await setTokenAsync(loginResponse.data);
        }
    }

    async function handleUserNextScreen() {
        try {
            const userToken = await getTokenAsync();

            if (userToken) {
                await refreshToken();
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'App' })],
                })

                props.navigation.dispatch(resetAction)
            } else {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'SignIn' })],
                })
                props.navigation.dispatch(resetAction)
            }
        }
        catch (error) {
            console.log(error);

            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'App' })],
            })

            props.navigation.dispatch(resetAction)
        }
    }

    React.useEffect(() => {
        handleUserNextScreen();
    });

    return <Loading />;
}