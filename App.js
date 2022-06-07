import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Home from './src/screens/home.js';
import  Dashboard from './src/screens/dashboard.js';
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import Icon from 'react-native-vector-icons/FontAwesome';



const Tab = createBottomTabNavigator(
); //2 objects Navigator & SCreen

const tabs = [
  {
    name: 'Home',
    activeIcon: <Icon name="home" color="#fff" size={25} />,
    inactiveIcon: <Icon name="home" color="#4d4d4d" size={25} />
  },
  {
    name: 'list',
    activeIcon: <Icon name="list-ul" color="#fff" size={25} />,
    inactiveIcon: <Icon name="list-ul" color="#4d4d4d" size={25} />
  },
  {
    name: 'camera',
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

  function Tabs() {
    return (
      <Tabbar
        tabs={tabs}
        tabBarContainerBackground='#6699ff'
        tabBarBackground='#fff'
        activeTabBackground='#6699ff'
        labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11 }}
        onTabChange={() => console.log('Tab changed')}/>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={ props=> <Tabs/> } >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="List" component={Home}/>
        <Tab.Screen name="Camera" component={Home}/>
        <Tab.Screen name="Notifications" component={Home}/>
        <Tab.Screen name="Profile" component={Home}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
