import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import { Button, Icon } from '@ant-design/react-native';

import bgPage from './../../../assets/images/bgTesting.jpg';
import FormTesting from './FormTesting';
import styles from './styles';

class TestingScreen extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      idChanndel: null,
      type: null,
    }
  }

  chooseChannel = (id) => () => {
    this.setState({
      ...this.state,
      idChanndel: id
    })
  }

  chooseType = (type) => () => {
    this.setState({
      ...this.state,
      type: type
    })
  }

  render(){
    const { idChanndel, type } = this.state;

    if(!!idChanndel && !!type) return <FormTesting idChanndel={idChanndel} type={type} />;

    return (
      <View style={styles.container}>
        <ImageBackground source={bgPage} style={styles.bgPage}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Choose Channel</Text>
          </View>
          <View style={styles.content}>
            {
              !idChanndel && (
                <ScrollView>
                  {
                    [1,2,3,4,5,6,7].map(item => {
                      return (
                        <Button key={item} style={styles.itemChannel} onPress={this.chooseChannel(item)}>
                          <Text style={{color: '#fff'}}>Chủ đề {item}</Text>
                        </Button>
                      )
                    })
                  }
                </ScrollView>
              )
            }

            {
              !!idChanndel && !type && (
                <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                  <Button onPress={this.chooseType('vn-en')} style={styles.itemChannel}>
                    <Text style={{color: '#fff'}}>Vietnamese - English</Text>
                  </Button>
                  <Button onPress={this.chooseType('en-vn')} style={styles.itemChannel}>
                    <Text style={{ color: '#fff'}}>English - Vietnamese</Text>
                  </Button>
                </View>
              )
            }

            
          </View>
          <View style={styles.back}>
            <Button style={styles.btnBack} onPress={() => this.props.navigation.goBack()}>
              <Icon name={'arrow-left'} />
            </Button>
          </View>
        </ImageBackground>
    </View>
    )
  }
}

export default TestingScreen;
