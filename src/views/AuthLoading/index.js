import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import { Button } from '@ant-design/react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { Button } from '@ant-design/react-native';
class AuthLoading extends React.Component {

  async componentDidMount() {
    const {navigation} = this.props;
    setTimeout(() => {
      navigation.navigate('Main');
    }, 1000)
  }

  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.title}>e
        <Text style={{color:"#ff7c7c"}}>Learning</Text>
      </Text>
      <Button style={[styles.ShortenBtn]} loading></Button>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:"#21243d",
    fontWeight:"bold",
    fontSize:50,
    marginBottom:50
  },
  ShortenBtn: {
    height:40,
    width:"80%",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#fff',
    borderWidth: 0
  }
});

export default AuthLoading;
