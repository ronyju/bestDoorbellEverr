/*import { StatusBar } from 'expo-status-bar';
import {Text, View, ImageBackground } from 'react-native';
import AppStyle from './AppStyle';

export default function App() {
  const localImage = require ("./assets/background2.jpg");
  return (
    <ImageBackground style={AppStyle.container} source={localImage}>
      <View style = {AppStyle.backgroundCover}>
        <Text style = {[AppStyle.lightText, AppStyle.header]}>Best doorbell everrrrrrr </Text>
      </View>
    </ImageBackground>
    
  );
}*/

/* ***************ugly 2 buttons pickImage and UploadImage**********
import {View,StyleSheet,ImageBackground} from 'react-native';
import UplodeScreen from './src/UplodeScreen';


export default function App() {
  return (
    <ImageBackground style={styles.container}>
      <View style={styles.container}>
       <UplodeScreen/>
      </View>
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
});
*/


// uploaded picture from firebase

import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, TouchableHighlight } from 'react-native';
import {firebase} from './config';
import { initializeApp } from 'firebase/app'; //validate yourself
import { getStorage, ref, getDownloadURL } from 'firebase/storage'; //access the storage database
import { StatusBar } from 'expo-status-bar';
import AppStyle from './AppStyle';


export default function App() {
  const [url, setUrl] = useState();
  const localImage = require ("./assets/background2.jpg");
  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, '/pic.png');
      await getDownloadURL(reference).then((x) => {
        setUrl(x);
      })
    }

    if (url == undefined) {func()};
  }, []);

  return (
    <ImageBackground style={AppStyle.container} source={localImage}>
      <View style = {AppStyle.backgroundCover}>
       <Image
        style={{width: '70%', height: '70%'}}
        source={{ uri: url }}
      />
      </View>
       <Text style = {[AppStyle.lightText, AppStyle.header]}>Hi im here outside the door </Text>
    </ImageBackground>
    
  );
}
