import React, { useState } from "react";
import { Container, FormContainer, ButtonContainer } from './styles';
import { Button, Input } from 'react-native-elements'
import { useData } from "../../hooks/data";
import { generateUniqueId } from "../../helpers";
import { useNavigation } from "@react-navigation/native";
import moment from 'moment';

const NewItem = () => {
    const { addItem } = useData()
const navigation = useNavigation()

    const [name, setName] = useState('')
    const [kcal, setKcal] = useState('')

    const handleOnSave = () => {
        if(name && kcal){
            addItem({
                id: generateUniqueId(),
                name,
                kcal: Number(kcal),
                date: moment()
            })
            navigation.goBack()
        }
        
    }
    return(
        <Container>
            <FormContainer>
                <Input
                    label="Nome"
                    value={name}
                    placeholder="Descrição"
                    onChangeText={setName}
                ></Input>
                <Input
                    label="Kcal"
                    value={kcal}
                    placeholder="Somente números"
                    onChangeText={setKcal}
                ></Input>

                <ButtonContainer>
                    <Button
                        title="Salvar"
                        type="outline"
                        onPress={handleOnSave}
                    ></Button>
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default NewItem;