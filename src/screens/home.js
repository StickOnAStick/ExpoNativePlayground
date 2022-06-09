import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

export default function Home() {

    const { theme, setTheme } = React.useContext(ThemeContext);
    const navigation = useNavigation();
    const { colors } = useTheme();

    function navigateToList() {
        navigation.navigate("List");
    }
    
    return (
            
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, color: colors.text }}>
        <Text style={{ color: colors.text }}> Home Screen </Text>
        
    
    </View>
    );
}