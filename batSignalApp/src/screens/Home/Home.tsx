import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './HomeStyles';
import logo from '../../../assets/batsymbol.png'

import BatButton from '../../components/Button/BatButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';


interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Home: React.FC<{ navigation: StackNavigationProp<RootStackParamList>}> = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image 
        source={logo}
        style={styles.fullLogo}
      />
      </View>
      <View>
        <BatButton 
        title="Activate" 
        onPress={()=> navigation.navigate('Forms')} />
      </View>
        
    </View>
  );
}

export default Home;