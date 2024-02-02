import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
  },
  containerLogo: {
    flex: 0.2,
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingBottom: 60,
  },
  tinyLogo: {
    width: 80,
    height: 50,
    alignItems: 'flex-start',
  },
  labelView: {
    paddingTop: 15,
    fontWeight: '700',
  },
  hintView: {
    paddingBottom: 15,
    fontWeight: '200',
  },
  inputStyle: {
    padding: 10, 
    borderColor: 'black', 
    borderWidth: 3, 
    width:300,
    borderRadius:4,
    elevation:3,
  },
  inputStyleMd: {
    padding: 10, 
    borderColor: 'black', 
    borderWidth: 3, 
    width:300,
    height:80,
    borderRadius:4,
    elevation:3,
  },
  inputStyleLarge: {
    padding: 10, 
    borderColor: 'black', 
    borderWidth: 3, 
    width:300,
    height:150,
    borderRadius:4,
    elevation:3,
  },
  btnView: {
    paddingTop: 30
  }
});