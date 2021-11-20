import axios from 'axios'

import { Alert } from 'react-native'

import { getTokenAsync,  deleteStorageAsync } from './storage'

const api = axios.create({
    baseURL: 'https://universal-identity-back.azurewebsites.net',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  api.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (
        error.request._hasError === true &&
        error.request._response.includes('connect')
      ) {
        Alert.alert(
          'Aviso',
          'Não foi possível conectar aos nossos servidores, sem conexão a internet',
          [{ text: 'OK' }],
          { cancelable: false },
        )
      }
  
      if (error.response.status === 401) {
        const requestConfig = error.config
  
        // O token JWT expirou  
        deleteStorageAsync()
          .then(() => {
            //navigate('AuthLoading', {})
          })
  
        return axios(requestConfig)
      }
  
      return Promise.reject(error)
    },
  )
  
  api.interceptors.request.use(
    config => {
      return getTokenAsync()
        .then(user => {
          if (user && user.token)
            config.headers.Authorization = `Bearer ${user.token}`
          return Promise.resolve(config)
        })
        .catch(error => {
          console.log(error)
          return Promise.resolve(config)
        })
    },
    error => {
      return Promise.reject(error)
    },
  )
  
  export default api