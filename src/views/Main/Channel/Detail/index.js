import React from 'react';
import {View, ImageBackground, ScrollView, Text, TextInput} from 'react-native';
import { Button, Icon, Provider, Modal, Toast  } from '@ant-design/react-native';

import { createWordForChannel , deleteWordItem} from './../../../../service';

import bgHome from './../../../../assets/images/bgChannelDetail.jpg';
import styles from './styles'

class ChannelDetailScreen extends React.Component {

  constructor(p){
    super(p);
    this.state = {
      dataChannel: null,
      isNew: false,
      formAdd: {
        en: '',
        vn: ''
      }
    }
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { channel } = navigation.state.params;

    this.setState({
      ...this.state,
      dataChannel: channel
    })
  }

  goHome = () => {
    const { navigation } = this.props;
    
    navigation.navigate('ListChannel')
  }

  setFormNew = (status) => () => {
    this.setState({
      ...this.state,
      isNew: status
    })
  }

  setInputChange = (text, key) => {
    const { formAdd } = this.state;
    formAdd[key] = text
    this.setState({
      ...this.state,
      formAdd
    })
  }

  createChannel = async () => {
    const {formAdd, dataChannel} = this.state;
    
    let f = !!formAdd.en.length;
    f = !!f && formAdd.vn.length;

    if(!f) {
      Toast.info('Please enter value', 1, undefined, false);
      return;
    }
    const data = await createWordForChannel({...formAdd}, dataChannel.id)
    
    this.setState({
      ...this.state,
      dataChannel: {
        ...this.state.dataChannel,
        data: [data, ...this.state.dataChannel.data]
      },
      isNew: false,
      formAdd: { en: '', vn: ''}
    })
  }

  onChannelClick = (word) => () => {
    Modal.operation([
      { text: 'Delete word', onPress: () => this.deleteChannel(word.id, this.state.dataChannel.id) },
    ]);
  };

  deleteChannel = async (id, idChannel) => {
    await deleteWordItem(id, idChannel);

    let { dataChannel } = this.state;
    dataChannel.data = dataChannel.data.filter(item => item.id !== id);
    
    this.setState({...this.state, dataChannel})
  }

  render(){
    const { dataChannel, isNew, formAdd } = this.state;

    return (
      <Provider>
        <View style={styles.container}>
          <ImageBackground source={bgHome} style={styles.bgHome}>
            <View style={styles.header}>
              <Button style={styles.btnBack} onPress={this.goHome}>
                <Icon style={{color: '#fff'}} name="arrow-left" />
              </Button>
              <Text style={{ textAlign: 'center', color: '#fff', fontSize: 15, flex: 5, height: 50, overflow: 'hidden', fontWeight: 'bold', lineHeight: 50}} >
                {
                  dataChannel?.name || "Unknow"
                }
              </Text>
              <Button style={styles.btnBack} onPress={this.setFormNew(true)}>
                <Icon style={{color: '#fff'}} name="plus" />
              </Button>
            </View>
            <View style={styles.content}>
              <ScrollView>
                {
                  dataChannel && dataChannel?.data?.map(item => {
                    return (
                      <Button onPress={this.onChannelClick(item)} key={item.id} style={styles.itemChannel} >
                        <Text style={{color: '#fff'}}>{item.en} - {item.vn}</Text>
                      </Button>
                    )
                  })
                }
              </ScrollView>
            </View>
          </ImageBackground>

          <Modal
            title="Create new Word"
            transparent
            visible={isNew}
            closable={false}
            footer={[
              { text: 'Cancel', onPress: this.setFormNew(false) },
              { text: 'Ok', onPress: () => this.createChannel() },
            ]}
          >
            <View style={{ paddingVertical: 20 }}>
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#000'}
                onChangeText={text => this.setInputChange(text, 'en')}
                value={formAdd.en}
                placeholder="English"
              />
              <TextInput
                style={[styles.input]}
                placeholderTextColor={'#000'}
                onChangeText={text => this.setInputChange(text, 'vn')}
                value={formAdd.vn}
                placeholder="Vietnamese"
              />
            </View>
          </Modal>
        </View>
    </Provider>
    )
  }
}


export default ChannelDetailScreen;
