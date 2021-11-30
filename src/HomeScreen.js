import * as React from 'react';
import { View, Text, button, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import App from '../App';

export default function Home({ navigation }) {
  return (
    
    <View style={styles.App}>
      <Text style={styles.fontG}>Como você está hoje?</Text>

      <View style={styles.container}>
      <TouchableOpacity
        title="Feliz"
        onPress={() => navigation.navigate('Feliz')}>
        <Image style={styles.button} source={require("./assets/feliz.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Triste"
        onPress={() => navigation.navigate('Triste')}>
        <Image style={styles.button} source={require("./assets/triste.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Bravo"
        onPress={() => navigation.navigate('Bravo')}>
        <Image style={styles.button} source={require("./assets/bravo.png")}/>
      </TouchableOpacity>
      </View>

      <View style={styles.container}>
      <TouchableOpacity
        title="Rico"
        onPress={() => navigation.navigate('Rico')}>
        <Image style={styles.button} source={require("./assets/rico.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Sonolento"
        onPress={() => navigation.navigate('Sonolento')}>
        <Image style={styles.button} source={require("./assets/sonolento.png")}/>
      </TouchableOpacity>

      <TouchableOpacity
        title="Doente"
        onPress={() => navigation.navigate('Doente')}>
        <Image style={styles.button} source={require("./assets/doente.png")}/>
      </TouchableOpacity>
      </View>
    </View>
 
  );
}

//export default App;

const styles = StyleSheet.create({
  App: {
    flex: 1,
    padding: 20,     
    width: '100%',
    backgroundColor: '#4682B4',
    justifyContent: "center",
    alignItems: "center"
    
  },
  button: {
    width: 80,
    height: 80,
  },
  container: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-around",
    width: '100%',
  },
  fontG: {
    fontSize: 28,
    color: 'white',
    textAlign: "center",
}
})