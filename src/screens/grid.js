import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HStack, Center, Flex } from 'native-base';

export default function Grid() {
    
    // const {theme, setTheme } = React.useContext(ThemeContext);
    
    return (
            
    <SafeAreaView style={{paddingHorizontal: 40, paddingTop: 30}}>
        <Flex direction="row" maxW="100%" bg="amber.300" flexWrap="wrap" > 
            <Center bg="primary.300" rounded="lg" borderColor="coolGray.200" borderWidth={1} bgColor="gray.700" shadow={3} _text={{color: "white"}}>1 </Center>
            <Center bg="primary.300" rounded="lg" borderColor="coolGray.200" borderWidth={1} bgColor="gray.700" shadow={3} _text={{color: "white"}}> 2</Center>
            <Center bg="primary.300" rounded="lg" borderColor="coolGray.200" borderWidth={1} bgColor="gray.700" shadow={3} _text={{color: "white"}}> 3</Center>
            <Center bg="primary.300" rounded="lg" borderColor="coolGray.200" borderWidth={1} bgColor="gray.700" shadow={3} _text={{color: "white"}}> 4</Center>
        </Flex>
        
    
        {/* <Button title="Switch Theme" onPress={ () => setTheme( theme === 'Light' ? 'Dark' : 'Light')}/> */}
        </SafeAreaView>
    
    );
}