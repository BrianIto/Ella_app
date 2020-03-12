import React from 'react'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { View, Text } from 'react-native'

export const RegisterPage = () => {
    return (
        <View>
            <InputText label="Nome"/>
            <InputText label="E-mail" />
            <InputText label="CPF" />
            <InputText label="Senha" />
            <InputText label="Confirmar Senha" />
            <Button>Confirmar</Button>
        </View>
    )
}
