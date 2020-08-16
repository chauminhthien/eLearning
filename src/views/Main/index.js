import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ChannelScreen from './Channel';
import TestingScreen from './Testing';
import HomeScreen from './Home';

const MainNavigation = createStackNavigator({
  Home     : HomeScreen,
  Testing  : TestingScreen,
  Channel  : ChannelScreen
}, {
  initialRouteName: 'Home',
  headerMode      : 'none'
});

export default createAppContainer(MainNavigation)

