import React from 'react';
import {  StatusBar, Text, StyleSheet, Alert} from 'react-native';
import { Container , Form, Input} from './styles' ;
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import UsuarioDAO from "../../DAOS/usuarioDAO";
import firebase from "@react-native-firebase/app";
import Actions from "../../redux/actions/actions";
import {connect} from "react-redux";

const Login = props => {

    const [loginData, setLoginData] = React.useState({
        cpf: '',
        senha: ''
    });
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        firebase.app();
    }, []);

    const onSubmit = async () => {
        //coloca tudo no Banco de dados
        setLoading(true);
        try {
            const {cpf, senha} = loginData;
            const user = await UsuarioDAO.login(cpf, senha);
            if (user) {
                props.setUserLogged(user);
                props.navigation.navigate('Main');
            } else {
                Alert.alert("Usuário ou senha inválidos");
            }
        } catch(e) {
            Alert.alert("Erro", "Usuário ou senha inválidos "+e);
        }
        setLoading(false);
    }

     return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor='#01020D'/>
                <Text style={styles.h1}> Bem Vinda ao Ella!</Text>
            <Form>
                <InputText
                    onChangeText={text => setLoginData({...loginData, cpf: text})}
                    label="E-mail ou CPF"
                />
                <InputText
                    onChangeText={text => setLoginData({...loginData, senha: text})}
                    label="Senha" />
                <Button
                    loading={loading}
                    onPress={onSubmit}>
                    Confirmar
                </Button>
                <Button
                    onPress={() => {
                        props.navigation.navigate('RegisterPage');
                    }}
                >
                    Registro
                </Button>
            </Form>
        </Container>
     );
 }

 const styles = StyleSheet.create({
    h1: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
    }
 });


Login.navigationOpitions = {
    title: 'ola mundo ',
};

const mapDispatchToProps = dispatch => ({
    setUserLogged: userLogged => dispatch({type: Actions.setUserLogged, payload: userLogged}),
})

export default connect(null, mapDispatchToProps)(Login);
