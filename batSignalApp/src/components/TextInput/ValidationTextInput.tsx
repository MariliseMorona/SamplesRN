import { TextInput, View, Text } from "react-native";
import { useState, useRef } from "react";

import { style } from './ValidationTextInputStyle' 
import { TextInputMask } from "react-native-masked-text";

interface ValidationTextInputProps {
    placeholder: string;
    keyboardType: 'default' | 'numeric' | 'email-address' | 'phone-pad' | 'name-phone-pad';
    validationMessage: string;
    regex: 'cel-phone';
    length: number;
  }
  
const ValidationTextInput: React.FC<ValidationTextInputProps> = (props) => {
    const [text, setText] = useState<string>('');
    const [validationMessage, setValidationMessage] = useState<string | undefined>();
    const phoneField = useRef<TextInputMask | null>(null);
    
    const validate = (input: string) => {
        if (phoneField.current) {
            const unmasked = phoneField.current.getRawValue()
            console.log(unmasked)
            const isValid = unmasked.length > props.length
            console.log(unmasked.length)
            console.log(isValid)
            if (!isValid) {
                setValidationMessage(props.validationMessage);
            } else {
                setValidationMessage(undefined);
            }
        }
       
    };

    return (
        <View style={style.container}>
            <Text style={style.labelView}>
                Phone
            </Text>
            <TextInputMask 
                editable
                style={style.inputStyle}
                type={props.regex}
                onChangeText={setText}
                onEndEditing={() => validate(text)}
                value={text}
                placeholder={props.placeholder}
                keyboardType={props.keyboardType}
                maxLength={15}
                ref={(ref) => phoneField.current = ref}>
            </TextInputMask>
            <Text style={style.hintView}>
                {validationMessage}
            </Text>
        </View>
    );
}

export default ValidationTextInput;