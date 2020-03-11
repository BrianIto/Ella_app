import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Pages/Login';
import User from './Pages/User';
import Main from './Pages/Main';

const Routes = createAppContainer(
    createStackNavigator({
            Login,
            User,
            Main,
        },
            {
                defaultNavigationOptions:{
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
