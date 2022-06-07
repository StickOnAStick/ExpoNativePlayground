import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../screens/home.js'
import  List from '../screens/list.js'
import  Dashboard from '../screens/dashboard.js'
import { View } from 'react-native';



const AppStack = createStackNavigator(); //2 objects Navigator & SCreen

export default function Navigator(){

    return (
    <NavigationContainer>
        <AppStack.Navigator >
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="List" component={List} />
            <AppStack.Screen name="Dashboard" component={Dashboard} />
        </AppStack.Navigator>
    </NavigationContainer>
    );
}