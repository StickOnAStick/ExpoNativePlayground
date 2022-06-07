import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';

const Test = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is some test text</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        color: '#fff'
    },
    text: {
        color: '#fff',
        fontSize: 32,
    },
})

export default Test;
