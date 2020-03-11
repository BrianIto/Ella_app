import React from 'react';
import {  StatusBar, Text} from 'react-native';

import { Container , Form, Input} from './styles' ;

 export default function Login(){
     return (

        <Container>
            <StatusBar barStyle='light-content' backgroundColor='#01020D'/>
                <Text> Bem Vinda ao ella!</Text>
            <Form>
                <Input
                     autocorrect= {false}
                     placeholder="email ou cpf"
                />
                <Input
                    autocorrect={false}
                    placeholder="senha"
                />

            </Form>
        </Container>
     );
 }


Login.navigationOpitions = {
    title: 'ola mundo ',

};
