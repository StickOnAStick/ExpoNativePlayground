import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

const ImagePicker = () => {
    const [selectedImage, setSelectedImage] = React.useState(null); 

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false){
        alert("Permission to access camera roll is required");
        return;
        }

        //If allowed
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        
        if(pickerResult.cancelled === true){
        return;
        }

        setSelectedImage({ localUri: pickerResult.uri });
    };

    let openShareDialogAsync = async () => {
        
        if(Platform.OS === 'web'){
        alert("Sharing is not available here yet!");
        return;
        }

        await Sharing.shareAsync(selectedImage.localUri);
    };

    //If selected succesfully
    if (selectedImage !== null){
        return (
        <View style={styles.container}>
            <Image source={{uri: selectedImage.localUri }} style={styles.thumbnail}/>
            <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
            <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={ () => {
            setSelectedImage(null);
            }}>
            <Text style={styles.buttonText}> Clear Input </Text>
            </TouchableOpacity>
        </View>
        );
    }

    return (
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>Pick A Photo</Text>
        </TouchableOpacity> 
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      color: '#fff',
    },
    text: {
      color: '#fff',
      fontSize: 24,
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: "contain"
    }
  });