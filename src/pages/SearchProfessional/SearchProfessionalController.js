import React, {useEffect, useCallback, useMemo} from "react";
import { Alert } from 'react-native'

import SearchProfessionalView from "./SearchProfessionalView";
import { Platform } from "react-native";
import Loading from "../../components/loading/Loading";
import api from '../../services/api'
import * as ImagePicker from "expo-image-picker";
import moment from "moment";
import ListProfessionalView from "./ListProfessionalView";
import debounce from 'lodash.debounce';
import {useNavigation} from "@react-navigation/native";

export default function SearchProfessionalController(props) {
  const [searchText, setSearchTextInput] = React.useState('')
  const [loading, setLoading] = React.useState(false);
  const [list, setList] = React.useState([]);

  const getProfessional = (searchTerm) => {
        setLoading(true);
        api.get(`/Pessoa/GetAll?SearchTerm=${searchTerm}&PageNumber=1`)
            .then((response) => {
                setList(response.data.data);
            })
            .catch((error) => {
                Alert.alert(
                    'Aviso',
                    error,
                    [{ text: 'OK' }],
                    { cancelable: false },
                )
            })
            .finally(() => setLoading(false));
    }

    const handleChange = (value) => {
        setSearchTextInput(value);
        getProfessional(value);
    };

    const debouncedResults = useMemo(() => {
        return debounce(handleChange, 500);
    }, []);

    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

  return (
    <>
      <SearchProfessionalView
        form={searchText}
        onChangeForm={debouncedResults}
      />

      <ListProfessionalView
        list={list}
        navigate={(id) => props.navigation.navigate('RegisterActivity', {pessoaId: id})}
      />
    </>
  );
}
