import {createStackNavigator} from "@react-navigation/stack"
import Users from "./components/Users";
import Home from "./components/Home";
import UserDetails from "./screens/UserDetails";
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";


const StackNavigator = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator.Navigator>
                <StackNavigator.Screen name={'Users page'} component={Users}/>
                <StackNavigator.Screen name={'Home'} component={Home}/>
                <StackNavigator.Screen name={'User details'} component={UserDetails}/>
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}

