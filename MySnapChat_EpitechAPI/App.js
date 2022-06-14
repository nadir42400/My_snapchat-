import 'react-native-gesture-handler';
import React from 'react';
import Register from './routes/Register';
import Connexion from './routes/Connexion';
import Cameras from './routes/Cameras'
import Home from './routes/Home';
import Chats from './routes/Chats'
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Register'
          component={Register}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Connexion'
          component={Connexion}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Cameras'
          component={Cameras}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name='Chats'
          component={Chats}
          options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonLogin: {
    backgroundColor: '#FF0000',
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,

  },

  buttonRegister: {
    backgroundColor: '#1E90FF',
    padding: 5,
    marginTop: 10,
    borderRadius: 5,

  },

});