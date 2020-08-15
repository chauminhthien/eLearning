import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import AuthLoadingScreen from './../views/AuthLoading';
import MainStack from './../views/Main';

const AppNavigation = createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  Main        : MainStack
}, {
  initialRouteName: 'AuthLoading',
  headerMode      : 'none'
});

export default createAppContainer(AppNavigation);
