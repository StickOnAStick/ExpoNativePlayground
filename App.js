import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home from './src/screens/home.js';
import  Dashboard from './src/screens/dashboard.js';
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Icon from 'react-native-vector-icons/FontAwesome';
import List from './src/screens/list.js';
import { BlurView } from 'expo-blur';
import { View, Text } from 'react-native';



const Tab = createBottomTabNavigator(
); //2 objects Navigator & SCreen

const tabs = [ //Tab Names must be EXACTLY the same as screen name
  {
    name: 'Home',
    activeIcon: <Icon name="home" color="#fff" size={25} />,
    inactiveIcon: <Icon name="home" color="#4d4d4d" size={25} />
  },
  {
    name: 'List',
    activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
    inactiveIcon: <Icon name="list-ul" color="#4d4d4d" size={25} />
  },
  {
    name: 'Camera',
    activeIcon: <Icon name="camera" color="#fff" size={25} />,
    inactiveIcon: <Icon name="camera" color="#4d4d4d" size={25} />
  },
  {
    name: 'Notification',
    activeIcon: <Icon name="bell" color="#fff" size={25} />,
    inactiveIcon: <Icon name="bell" color="#4d4d4d" size={25} />
  },
  {
    name: 'Profile',
    activeIcon: <Icon name="user" color="#fff" size={25} />,
    inactiveIcon: <Icon name="user" color="#4d4d4d" size={25} />
  },

];



export default function App() {

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused }) => {
          
          let tabForDisplay = tabs.find( (object) => object.name === route.name );
          let iconForDisplay = focused ? tabForDisplay.activeIcon : tabForDisplay.inactiveIcon;
    
          return iconForDisplay;
        },
        tabBarStyle: { borderColor: '#666', borderWidth: 2, borderRadius: 10,
                       backgroundColor: '#', position: 'absolute',
                       bottom: 25, left: 20, right: 20, },
                      
        tabBarActiveBackgroundColor: "#000",
        tabBarInactiveTintColor: "#4d4d4d",
        headerShown: false,
        tabBarShowLabel: false
        })
      }>
        <Tab.Screen name="Home" component={Home} /> 
        <Tab.Screen name="List" component={List}/>
        <Tab.Screen name="Camera" component={Home}/>
        <Tab.Screen name="Notification" component={Home}/>
        <Tab.Screen name="Profile" component={Dashboard}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
