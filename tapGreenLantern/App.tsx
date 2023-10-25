import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import symbolOn from './assets/pictures/symbol_on.png';
import symbolOff from './assets/pictures/symbol_off.png';
import Torch from 'react-native-torch';
import { Platform } from 'react-native';
import RNShake from 'react-native-shake';


export default function App() {
  const [isActive, setIsActive] = useState(false)

  function handleSymbol(){
    setIsActive((oldValue:boolean) =>{
      return !oldValue
    })
  }

  useEffect(() => {
    async function toggleTorch() {
      try {
        if (Platform.OS === 'ios') {
          Alert.alert('Lanterna esta ativada: ' + isActive)
          Torch.switchState(isActive);
        } else {
          const cameraAllowed = await Torch.requestCameraPermission(
            'Camera Permissions', 
            'We require camera permissions to use the torch on the back of your phone.'
          );
          if (cameraAllowed) {
            Torch.switchState(isActive);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    toggleTorch();
  }, [isActive]);

  useEffect(()=>{
    const subscription = RNShake.addListener(()=>{
      handleSymbol()
  });
    return () => subscription.remove();
  }, []);

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
      <Image source={isActive ? symbolOn : symbolOff} style={imageStyle.image}/>
      </TouchableOpacity>
    </View>
  );
}

const imageStyle = StyleSheet.create({
  image: {
    width: 200, height: 200, alignItems: 'center', justifyContent: 'center'
  }
})

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#998877',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#997777',
    alignItems: 'center',
    justifyContent: 'center',
  },
});