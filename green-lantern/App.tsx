import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import symbolOn from './assets/pictures/symbol_on.png';
import symbolOff from './assets/pictures/symbol_off.png';

export default function App() {
  const [isActive, setIsActive] = useState(false)


  function handleSymbol(){
    setIsActive((oldValue:boolean) =>{
      return !oldValue
    })
  }


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
