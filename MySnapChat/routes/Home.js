import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My_Snapchat</Text>
      <Image style={styles.logo} source={require('./Snapchat.png')}></Image>
      
      <View style={styles.button}>
        <Button
              title='Register'
              color
              onPress={() =>
              navigation.navigate('Register')
              }
              />
      </View>
      
      <View style={styles.button1}>
        <Button
              style={styles.buttonInner}
              title='Login'
              color
              onPress={() =>
              navigation.navigate('Connexion')
              }
              />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#EBDB24',
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 3,
  },

  button: {
    marginTop: 100,
    color: 'black',
    height: 40,
    backgroundColor: '#1E90FF' ,
    borderRadius: 4,
  },

  button1: {
    marginTop: 10,
    color: 'black',
    height: 40,
    backgroundColor: '#FF0000' ,
    borderRadius: 4,
  },

  logo: {
    marginLeft: 65,
    marginTop: 50,
    width: 250,
    height: 250,
  },

});