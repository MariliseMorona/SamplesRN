import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Gesture from './src/gesture';
import Pressed from './src/pressed';
import imgPomo from './assets/pomoOuro.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Gesture>
       
      </Gesture>
      <Text selectable={true}>
        Este texto é selecionável =)
      </Text>
      <StatusBar style="auto" />

      <Text>
        <Text style={[styles.text, styles.border]}>
          Olá
        </Text>
        <Text>
          Mundo
        </Text>
      </Text>
      
      <View>
        <Text>
          Olá
        </Text>
        <Text>
          Mundo
        </Text>
      </View>

      <Pressed>

      </Pressed>

      <Image
      source={require('D:Documents/Projetos/Studies/RN/Esamples_GitHub/SamplesRN/resourcesTests/assets/pomoOuro.png')}/>

    <Image
    source={imgPomo}
    
    >
      
    </Image>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    padding: 5,
  },
  border: {
    borderColor: 'red',
    borderWidth: 5,
  }
});
