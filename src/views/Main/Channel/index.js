import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ChannelScreen from './List';
import ChannelDetailScreen from './Detail';

const ListChannelNavigation = createStackNavigator({
  ListChannel     : ChannelScreen,
  ChannelDetail   : ChannelDetailScreen,
}, {
  initialRouteName: 'ListChannel',
  headerMode      : 'none'
});

export default createAppContainer(ListChannelNavigation)

