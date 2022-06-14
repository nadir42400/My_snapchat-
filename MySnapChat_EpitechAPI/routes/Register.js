import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import Constants from "expo-constants";

const baseUrl = "http://snapi.epitech.eu:8000";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeEmailHandler = (email) => {
    setEmail(email);
  };

  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onSubmitFormHandler = async (event) => {
    if (!email.trim() || !password.trim()) {
      alert("Email or Password is invalid");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(`${baseUrl}/inscription`, {
        email,
        password,
      });
      if (response === true) {
        alert(` You have created: ${JSON.stringify(response.data)}`);
        setIsLoading(false);
        setEmail('');
        setPassword('');
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      alert("An error has occurred");
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>      
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        placeholderTextColor={"#C3CED9"}
        value={email}
        onChangeText={onChangeEmailHandler}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        placeholderTextColor={"#C3CED9"}
        value={password}
        onChangeText={onChangePasswordHandler}
        maxLength={15}
        secureTextEntry={true}
      />   
      <Button
        title="Register"
        onPress={onSubmitFormHandler}
      />
      <Text 
        style={styles.loginText}
        onPress={() => this.props.navigation.navigate('Connexion')}>
        Already Registered? Click here to login
      </Text>                          
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

  inputStyle: {
    backgroundColor: 'white',
    height: 40,
    marginBottom: 50,
    padding: 10,
    borderRadius: 4,
  },

  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
