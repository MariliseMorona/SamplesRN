import React from "react";
import { StyleSheet, Alert, View, Text } from "react-native";

export default function Gesture() {
    return (
        <View style = {styles.container}>
            <View onTouchStart={(event)=>{
                Alert.alert('TOQUE', "Clique iniciado")
            }}
            onTouchEnd={(evento)=>{
                Alert.alert('TOQUE', 'Toque finalizado')
            }}
            >
                <Text style = {styles.text}>
                    Testando o Gesture</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      padding: 10,
      margin: 30,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
  });
  