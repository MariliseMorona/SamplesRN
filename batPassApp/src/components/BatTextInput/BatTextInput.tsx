import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps {
  pass: string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <View>
        <TextInput 
          placeholder='pass' 
          style={ styles.inputer }
          value={ props.pass }
        >
        </TextInput>
    </View>
  );
}