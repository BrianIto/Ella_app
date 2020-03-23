import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Login from './Pages/Login';
import User from './Pages/User';
import Main from './Pages/Main';
import CartaoMulher from './Pages/CartaoMulher/index';
import RegisterPage from './Pages/Registro/index';

const Routes = createAppContainer(
    createStackNavigator({
            Login,
            User,
            Main,
            CartaoMulher,
            RegisterPage,
        },
            {
                defaultNavigationOptions:{
                    header: <></>,
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: false,
                    headerStyle:{
                        backgroundColor:'#01020D',
                    },
                    headerTintColor:'#ffff',
                }
            }
    )
);

export default Routes;
