import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    
    const navigation = useNavigation();

    function navigateToList() {
        navigation.navigate("List");
    }
    
    return (
            
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#15151F' }}>
        <Text> Home Screen </Text>
        <Button title="Open List Screen" onPress= {()=>navigateToList()}/>
    
    </View>
    );
}