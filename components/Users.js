import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service";
import {FlatList, View} from "react-native";
import User from "./User";
import React from "react";


const Users = (props) => {
    const {navigation} = props;
    const [users, setUsers] = useState();

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);

    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item} nav={navigation}/>}
                keyExtractor={item => '' + item.id}
            />
        </View>
    )
};
export default Users;

