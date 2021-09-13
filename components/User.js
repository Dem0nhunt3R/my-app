import React from 'react';
import {StyleSheet} from 'react-native';
import {View,Text,Button,TouchableOpacity} from 'react-native';

const User = ({item}) => {
    return <View style={styles.userBox}>
        <Text>{item.name}</Text>
    </View>;
};
export default User;

const styles = StyleSheet.create({
    userBox:{
        backgroundColor:'yellow',
        marginBottom:5

    }
});
