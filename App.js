import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ImageBackground } from 'react-native';

export default function App({ navigation }) {
  return (
   
    <View style={styles.container}> 
     <ImageBackground style={ styles.imgBackground } 
                 source={require('./métro.gif')}>
     </ImageBackground>
      
      <Text style={styles.title}>Versus Métro</Text>
      
  
      <View style={styles.button}>
        
        <Button
          title='Start'
          color 
          onPress={() =>
            navigation.navigate('')
          }
        />
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: './métro.gif',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    color: 'black',
    backgroundColor: '#a72a58',
    borderRadius: 4,
    width: 80,
    height: 35,
    marginTop: 250,
  },

  imgBackground: {
    flex: 0.5,
    width: 700,
    height:970,
  },

  title: {
    flex: 1,
    color: 'red',
    marginTop: -255,
    marginBottom: 80,
    fontSize: 30,
  },

});
