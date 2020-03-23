import React from 'react';
//import { StatusBar} from 'react-native';
//import styles from './styles';

import './confg/ReactotronConfg';
import Routes from './routes'
import {Provider} from "react-redux";
import firebase from '@react-native-firebase/app';
import {Store} from "./redux/store";
import UsuarioDAO from "./DAOS/usuarioDAO";

const App = () => {

    return (
        <Provider store={Store}>
            <Routes />
        </Provider>
    );
}

export default App;

