import React, { useEffect } from "react";
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity} from "react-native";
import {getColors} from "../../util/CustomHooks";
import SearchProfessionalStyles from "./SearchProfessionalStyles";
import ListProfessionalStyles from "./ListProfessionalStyles";
import {Avatar, Divider} from "react-native-paper";
import moment from "moment";
import ButtonWithIcon from "../../components/buttonWithIcon/ButtonWithIcon";
import { useNavigation } from "@react-navigation/native";

export default function ListProfessionalView(props) {
    const { onClickInsertRegister, list } = props;
    const colors = getColors();
    const styles = ListProfessionalStyles(colors);
    const [expanded, setExpandend] = React.useState();

    const mountImage = (image) => {
        if (image) {
            return (
                <Image style={styles.image}  source={{
                    uri: image
                }}
                />
            );
        } else {
            return <View style={styles.replacedImage} />;
        }
    };



    return (
        <ScrollView style={styles.container}>
            {
                (list.length > 0) ? (
                    <FlatList data={list} renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                style={styles.container}
                                onPress={() => setExpandend(item.id)}
                            >
                                <View style={styles.cardView}>
                                    <View style={styles.containerRow}>
                                        <View style={{...styles.containerColumn, marginRight: 19, justifyContent: 'center', alignItems: 'center'}}>
                                            {mountImage(item.imagemPerfilBase64)}
                                        </View>
                                        <View style={styles.containerColumn}>
                                         <Text style={styles.labelName}>{item.nome}</Text>
                                        <Text style={styles.label}>Avalliação: {item.totalAvaliacao}</Text>
                                        </View>
                                    </View>
                                </View>

                                {item.id === expanded && (
                                    <View>
                                        <ButtonWithIcon
                                            type="declined"
                                            onPress={() => props.navigate(item.id)}
                                            text={"Insert Register"}
                                            outline={false}
                                        />
                                    </View>
                                )}
                            </TouchableOpacity>
                        )
                    }} />
                ) : (<Text>Nenhum profissional encontrado</Text>)
            }

        </ScrollView>
    );
}
