import React from 'react'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { View, Text } from 'react-native'

export const RegisterPage = () => {

    const [data, setData] = React.useState({
        nome: '',
        email: '',
        cpf: '',
        senha: '',
        confirmSenha: '',
    });

    const campos = ['nome', 'email', 'cpf', 'senha', 'confirmSenha'];

    const onSubmit = () => {
        let passa = true;
        campos.forEach(campo => {if (data[campo] === '') { passa = false }});
        if (!passa) {
            alert("Por favor, informe todos os campos.")
        } else {
            //Manda pro Banco de Dados.
        }
    };

    return (
        <View>
            <InputText onChangeText={text => setData({...data, nome: text})} label="Nome"/>
            <InputText onChangeText={text => setData({...data, email: text})} label="E-mail" />
            <InputText onChangeText={text => setData({...data, cpf: text})} label="CPF" />
            <InputText onChangeText={text => setData({...data, senha: text})} label="Senha" />
            <InputText onChangeText={text => setData({...data, confirmSenha: text})} label="Confirmar Senha" />
            <Button>Confirmar</Button>
        </View>
    )
}
