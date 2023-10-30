import React, { useState } from "react";
import { Container, FormContainer, ButtonContainer } from './styles';
import { Button, Input } from 'react-native-elements'

const NewItem = () => {

    const [name, setName] = useState('')
    const [kcal, setKcal] = useState('')

    const handleOnSave = () => {
        console.log(name, kcal);
        
        
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