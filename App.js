import React, { useState } from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home.js';
import Dashboard from './src/screens/dashboard.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { ThemeContext } from './src/context/ThemeContext.js';
import Grid from './src/screens/grid.js';
import { NativeBaseProvider } from 'native-base';

//Color Theme Settup
const DarkTheme = {
  dark: true,
  colors: {
      primary: 'rgb(255, 45, 85)',
      background: '#170e31',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(255, 255, 255)',
      border: '#875ffb',
      notification: 'rgb(255, 69, 58)',
  },
};

const LightTheme = { 
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: '#5332b0',
    
    card: 'rgb(255, 255, 255)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const Tab = createBottomTabNavigator(); //2 objects Navigator & SCreen


export default function App() {
  
  const [theme, setTheme] = useState('Light');
  const themeContext = { theme, setTheme};
  
  return (
    <NativeBaseProvider>
    <ThemeContext.Provider value={themeContext}>
      <NavigationContainer theme={ theme == 'Light' ?  DarkTheme : LightTheme  }>
        <Tab.Navigator  screenOptions={ ({ route }) => ({
          //Icon Selection
          tabBarIcon: ({ focused }) => {
          
            let tabForDisplay = tabs.find( (object) => object.name === route.name );
            let iconForDisplay = focused ? tabForDisplay.activeIcon : tabForDisplay.inactiveIcon;
      
            return iconForDisplay;
          },
          //Styling
          tabBarStyle: { borderColor: '#875ffb', borderWidth: 2, borderRadius: 10,
                        backgroundColor: '#170e31', position: 'absolute',
                        bottom: 25, left: 20, right: 20, },
          headerShown: false,
          tabBarShowLabel: false
          })
        }>
          <Tab.Screen name="Home" component={Home} /> 
          <Tab.Screen name="Stats" component={Home}/>
          <Tab.Screen name="Grid" component={Grid}/>
          <Tab.Screen name="Notification" component={Home}/>
          <Tab.Screen name="Profile" component={Dashboard}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
    </NativeBaseProvider>
  );
}


const tabs = [ //Tab Names must be EXACTLY the same as screen name
  {
    name: 'Home',
    activeIcon: <MaterialIcon name="notebook-edit" color="#fff" size={25} style={{ backgroundColor: '#875ffb', 
                                                                      height: '75%', aspectRatio: 1, 
                                                                      borderRadius: 100, textAlign: 'center', 
                                                                      textAlignVertical: 'center' }}/>,
    inactiveIcon: <MaterialIcon name="notebook-edit-outline" color="#4d4d4d" size={25} />
  },
  {
    name: 'Grid',
    activeIcon: <MaterialIcon name="view-grid" color="#fff" size={25} style={{ backgroundColor: '#875ffb', 
                                                                     height: '75%', aspectRatio: 1, 
                                                                     borderRadius: 100, textAlign: 'center', 
                                                                     textAlignVertical: 'center' }}/>,
    inactiveIcon: <MaterialIcon name="view-grid-outline" color="#4d4d4d" size={25} />
  },
  {
    name: 'Stats',
    activeIcon: <EntypoIcon name="line-graph" color="#fff" size={27} style={{ backgroundColor: '#875ffb', 
                                                                    height: '75%', aspectRatio: 1, 
                                                                    borderRadius: 100, textAlign: 'center', 
                                                                    textAlignVertical: 'center' }}/>,
    inactiveIcon: <EntypoIcon name="line-graph" color="#4d4d4d" size={24} />
  },
  {
    name: 'Notification',
    activeIcon: <Icon name="bell" color="#fff" size={25} style={{ backgroundColor: '#875ffb', 
                                                                  height: '75%', aspectRatio: 1, 
                                                                  borderRadius: 100, textAlign: 'center', 
                                                                  textAlignVertical: 'center' }}/>,
    inactiveIcon: <Icon name="bell-o" color="#4d4d4d" size={25} />
  },
  {
    name: 'Profile',
    activeIcon: <Icon name="user" color="#fff" size={25} style={{ backgroundColor: '#875ffb', 
                                                                  height: '75%', aspectRatio: 1, 
                                                                  borderRadius: 100, textAlign: 'center', 
                                                                  textAlignVertical: 'center' }} />,
    inactiveIcon: <Icon name="user" color="#4d4d4d" size={25} />
  },

];
