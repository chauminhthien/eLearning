import React from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';
import { Button, Modal, WhiteSpace, WingBlank, Provider  } from '@ant-design/react-native';

import bgPage from './../../../../assets/images/bgTesting2.jpg';

import styles from './styles';

class FormTesting extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      input: null
    }
    
  }

  setInputChange = text => {
    this.setState({
      ...this.state,
      input: text
    })
  }

  confirmSave = () => {
    Modal.alert('Title', 'alert content', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('ok') },
    ]);
  }

  

  render(){
    const { input } = this.state;
    return (
      <View style={styles.container}>
        {/* <WingBlank> */}
          <ImageBackground source={bgPage} style={styles.bgPage}>
            <View style={styles.content}>
              <View style={styles.viewWord}>
                <Text style={styles.txtWord}>Đây là từ vựng</Text>
              </View>
              <TextInput
                style={[styles.urlInput]}
                placeholderTextColor={'#fff'}
                onChangeText={text => this.setInputChange(text)}
                value={input}
                placeholder="Enter value"
              />
              <Button style={styles.btnBack}>
                <Text style={{color: '#fff'}}>Check</Text>
              </Button>
            </View>
            <View style={styles.footer}>
              <WhiteSpace/>
              <Button onPress={this.confirmSave} style={styles.btnBack}>
                <Text style={{color: '#fff'}}>Save and back</Text>
              </Button>
            
            </View>
          </ImageBackground>
          <Modal
            popup
            visible={false}
            animationType="slide-up"
            onClose={this.onClose2}
          >
            <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
              <Text style={{ textAlign: 'center' }}>Content...</Text>
            </View>
            <Button type="primary">
              close modal
            </Button>
          </Modal>
    </View>
    )
  }
}


export default () => (
  <Provider>
    <FormTesting />
  </Provider>
);
