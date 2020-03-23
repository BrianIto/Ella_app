import React from 'react';
import {  StatusBar, Text, StyleSheet} from 'react-native';

import { Container , Form, Input} from './styles' ;
import Button from '../../components/Button';
import InputText from '../../components/InputText';

const Login = props => {
     return (

        <Container>
            <StatusBar barStyle='light-content' backgroundColor='#01020D'/>
                <Text style={styles.h1}> Bem Vinda ao Ella!</Text>
            <Form>
                <InputText
                    label="E-mail ou CPF"
                />
                <InputText label="Senha" />
                <Button
                    onPress={() => {
                        props.navigation.navigate('Main');
                    }}
                    >
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

export default Login;
