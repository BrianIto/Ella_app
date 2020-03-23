import React from 'react'
import InputText from '../../components/InputText'
import Button from '../../components/Button'
import { View, Text, Alert } from 'react-native'
import UsuarioDAO from "../../DAOS/usuarioDAO";

export const RegisterPage = () => {

    const [data, setData] = React.useState({
        nome: '',
        email: '',
        cpf: '',
        senha: '',
        confirmSenha: '',
    });

    const campos = ['nome', 'email', 'cpf', 'senha', 'confirmSenha'];

    const onSubmit = async () => {
        let passa = true;
        campos.forEach(campo => {if (data[campo] === '') { passa = false }});
        if (!passa) {
            alert("Por favor, informe todos os campos.");
        } else if (data.confirmSenha !== data.senha) {
            alert ("As senhas não batem");
            // Manda pro Banco de Dados.
            try {
                await UsuarioDAO.registerUsuario(data);
                Alert.alert("Bem-vinda!", "Você foi adicionada com sucesso!");
            } catch (e) {
                Alert.alert("Erro...", "Ocorreu um erro em nossos servidores. Erro: "+e);
            }
        }
    };

    return (
        <View>
            <InputText onChangeText={text => setData({...data, nome: text})} label="Nome"/>
            <InputText onChangeText={text => setData({...data, email: text})} label="E-mail" />
            <InputText onChangeText={text => setData({...data, cpf: text})} label="CPF" />
            <InputText onChangeText={text => setData({...data, senha: text})} label="Senha" />
            <InputText onChangeText={text => setData({...data, confirmSenha: text})} label="Confirmar Senha" />
            <Button onPress={onSubmit}>Confirmar</Button>
        </View>
    )
}

export default RegisterPage;
