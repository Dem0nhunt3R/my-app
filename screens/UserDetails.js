import {Text, View} from "react-native";
import React from "react";


const UserDetails = (props) => {

    const {route: {params: {data}}, navigation} = props;

    return <View>
        <Text>{data.name} - - {data.email}</Text>
    </View>;
};
export default UserDetails;

