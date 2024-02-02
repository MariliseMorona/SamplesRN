import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
      container:{
        alignItems:'stretch',
      },
      labelView: {
        paddingTop: 15,
        fontWeight: '700',
      },
      inputStyle: {
        padding: 10, 
        borderColor: 'black', 
        borderWidth: 3, 
        width:300,
        borderRadius:4,
        elevation:3,
      },
      hintView: {
        paddingBottom: 15,
        fontWeight: '200',
        color:'red'
      },
});