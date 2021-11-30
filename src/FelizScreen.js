import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Estilo from './Estilo';
import { styles } from './HomeScreen';

export function FelizScreen({ navigation }) {
  return (
    <View style={styles.App}>
      <Text style={Estilo.fontG}>Que bom que você está feliz. Tenha um ótimo dia!</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.button} source={require("./assets/voltar.png")} />
      </TouchableOpacity>
    </View>
  );
}
export function TristeScreen({ navigation }) {
  return (
    <View style={styles.App}>
      <Text style={Estilo.fontG}>Não fique triste, tudo vai melhorar. Podemos te ajudar em algo?</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.button} source={require("./assets/voltar.png")} />
      </TouchableOpacity>
    </View>
  );
}
export function BravoScreen({ navigation }) {
  return (
    <View style={styles.App}>
      <Text style={Estilo.fontG}>Eita! Tome uma água com açúcar que ajuda!</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.button} source={require("./assets/voltar.png")} />
      </TouchableOpacity>
    </View>
  );
}
export function RicoScreen({ navigation }) {
  return (
    <View style={styles.App}>
      <Text style={Estilo.fontG}>Recebeu hoje, foi?</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.button} source={require("./assets/voltar.png")} />
      </TouchableOpacity>
    </View>
  );
}
export function SonolentoScreen({ navigation }) {
  return (
    <View style={styles.App}>
      <Text style={Estilo.fontG}>Toma um café que ajuda.</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.button} source={require("./assets/voltar.png")} />
      </TouchableOpacity>
    </View>
  );
}
export function DoenteScreen({ navigation }) {
  return (
    <View style={styles.App}>
      <Text style={Estilo.fontG}>Ao persistirem os sintomas um médico deverá ser consultado.</Text>
      <TouchableOpacity
        title="Home"
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.button} source={require("./assets/voltar.png")} />
      </TouchableOpacity>
    </View>
  );
}
