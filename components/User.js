import {Button, Text, View} from "react-native";
import React from "react";


const User = (props) => {
    const {item, nav: {navigate}} = props;

    const onPress = () => {
        navigate('User details', {data: item});
    };

    return <View>
        <Text>{item.name}</Text>
        <Button title={'user details'} onPress={onPress}/>
    </View>;
};
export default User;

