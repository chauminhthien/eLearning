import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { Button } from '@ant-design/react-native';

import bgHome from './../../../assets/images/bgHome.jpg';
import styles from './styles'

class HomeScreen extends React.Component {

  navigationLink = (link) => () => {
    const {navigation} = this.props;
    navigation.navigate(link);
  }
  render(){
    
    return (
    <View style={styles.container}>
      <ImageBackground source={bgHome} style={styles.bgHome}>
        <View style={styles.listFeature}>
          <Button style={styles.block} onPress={this.navigationLink('Testing')}>
            <Text style={{color: '#fff'}}>Làm kiểm tra</Text>
          </Button>
          <Button style={styles.block} onPress={this.navigationLink('Channel')}>
            <Text style={{color: '#fff'}}>Quản lý chủ đề</Text>
          </Button>
          <Button style={styles.block}>
           <Text style={{color: '#fff'}}>Lịch sử kiểm tra</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
    )
  }
}

export default HomeScreen;
