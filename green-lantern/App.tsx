import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Torch from 'react-native-torch';
import symbolOn from './assets/pictures/symbol_on.png';
import symbolOff from './assets/pictures/symbol_off.png';

export default function App() {
  const [isActive, setIsActive] = useState(false)


  function handleSymbol(){
    setIsActive((oldValue:boolean) =>{
      return !oldValue
    })
  }

  // Apresenta o alerta antes do componente
  //useEffect(()=>{
    //Alert.alert('Montou o componente')
  //})

  // Apresentar o alerta depois do componente
  //useEffect(()=>{
    //return() =>  Alert.alert('Desmontou o componente')
  //})

  // Observa o componente e em sua mudança de estado apresenta o Alerta
  useEffect(()=>{
    Torch.switchState(isActive);
    //Alert.alert('Atualizou o componente ' + isActive)
  }, [isActive])

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
