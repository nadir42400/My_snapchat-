import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCdPuFWWZ1ZQbTiulwIPon18_2w0aAH6d4",
    authDomain: "react-native-mysnapchat.firebaseapp.com",
    projectId: "react-native-mysnapchat",
    storageBucket: "react-native-mysnapchat.appspot.com",
    messagingSenderId: "818938189500",
    appId: "1:818938189500:web:c6218df9f5098e4e9162b9"
  };  
firebase.initializeApp(firebaseConfig);
export default firebase;