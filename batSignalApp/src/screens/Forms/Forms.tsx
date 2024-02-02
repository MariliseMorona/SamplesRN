import React, { useState, useRef } from "react";
import { Image, TextInput, View, Text } from 'react-native';
import logo from '../../../assets/batsymbol.png'
import BatButton from "../../components/Button/BatButton";
import ValidationTextInput from '../../components/TextInput/ValidationTextInput';

import { styles } from './FormsStyles';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/types";

const Forms: React.FC<{navigation: StackNavigationProp<RootStackParamList>}> = ({ navigation }) => {

  const [message, setMessage] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string | undefined>();

  const validateText = (message: string) => {
        const isValid = message.length > 0
        console.log(isValid)
        if (!isValid) {
            setValidationMessage("Insert a message");
        } else {
            setValidationMessage(undefined);
        }
  };
    return (
      <View style={styles.container}>
          <View style={styles.containerLogo}>
          <Image 
            source={logo}
            style={styles.tinyLogo}
          />
          </View>
          <View>
            <TextInput 
              editable
              placeholder="Insert your name"
              keyboardType="name-phone-pad"
              numberOfLines={1}
              maxLength={50}
              style={styles.inputStyle}
            />
          </View>
          <View>
            <ValidationTextInput
            placeholder="(00)00000-0000"
            keyboardType='numeric'
            validationMessage="Insert a valid phone"
            regex='cel-phone'
            length={10}
            />
          </View>
          <View>
            <TextInput
            editable
            multiline
            numberOfLines={5}
            placeholder="Insert your address"
            keyboardType="name-phone-pad"
            maxLength={300}
            style={styles.inputStyleMd}
            />
          </View>
          <View>
            <Text style={styles.labelView}> Message </Text>
            <TextInput
            editable
            numberOfLines={1}
            placeholder={message === "" ? "Insert your message" : ""}
            keyboardType="name-phone-pad"
            maxLength={30}
            style={styles.inputStyleLarge}
            value={message}
            onChangeText={setMessage}
            onEndEditing={()=> validateText(message)}
            />
            <Text style={styles.hintView}> {validationMessage}</Text>
          </View>
          <View style={styles.btnView}>
            <BatButton 
            title="Send"
            onPress={()=>{}}
            />
          </View>
      </View>
    );
}

export default Forms;