import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {getUsers} from "../api.service/api.service";
import User from "./User";

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);


    return <View>
        <FlatList
            data={users}
            renderItem={({item}) => {
                return <User item={item}/>
            }}
            keyExtractor={item => '' + item.id}
        />
    </View>;
};
export default Users;

const styles = StyleSheet.create({});