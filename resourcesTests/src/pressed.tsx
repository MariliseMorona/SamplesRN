import React from "react";
import { StyleSheet, Alert, View, Text } from "react-native";

export default function Pressed() {
    return (
        <View style = {styles.container}>
            <Text 
            style={styles.text}
            selectable={false}
            onPress={()=> { console.log('pressionado')}}
            onLongPress={()=> { console.log('pressinamento longo')}}
            >
                Testando o Pressed
            </Text>

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
        color: 'red'
    }
  });