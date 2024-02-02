import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyle';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/types';



const BatButton: React.FC = ({ onPress, title })  => {
  return (
    <View>
        <Pressable
            onPress={onPress}
            style={styles.button}
            >
            <Text style={styles.text}>
                {title}
            </Text>
        </Pressable>
    </View>
  );
};

export default BatButton;