import React from 'react';
import {View, Text} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

class AuthLoading extends React.Component {

  // async componentDidMount() {
  //   const {navigation} = this.props;
  //   const tokenStorage = await AsyncStorage.getItem(
  //     StorageKey.TOKEN_TRAFFICOM_APP,
  //   );

  //   if (tokenStorage && tokenStorage !== null) navigation.navigate('Main');
  //   else navigation.navigate('Auth');
  // }

  render(){
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

export default AuthLoading;
