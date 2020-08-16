import React from 'react';
import {View, ImageBackground, ScrollView, Text, TextInput} from 'react-native';
import { Button, Icon, Provider, Modal, Toast  } from '@ant-design/react-native';

import { getChannel, createChannel as createChannelItem , deleteChannel as deleteChannelItem} from './../../../../service';

import bgHome from './../../../../assets/images/bgChannel.jpg';
import styles from './styles'

class ChannelScreen extends React.Component {

  constructor(p){
    super(p);
    this.state = {
      dataChannel: [],
      isNew: false,
      channelName: ''
    }
  }

  async componentDidMount() {
    const data = await getChannel();
    this.setState({
      ...this.state,
      dataChannel: data,
    })
  }

  goHome = () => {
    const { navigation } = this.props;
    navigation.navigate('Home')
  }

  setFormNew = (status) => () => {
    this.setState({
      ...this.state,
      isNew: status
    })
  }

  setInputChange = (text) => {
    this.setState({
      ...this.state,
      channelName: text
    })
  }

  createChannel = async () => {
    const {channelName} = this.state;
    
    let f = !!channelName.length;

    if(!f) {
      Toast.info('Please enter value', 1, undefined, false);
      return;
    }
    const channel = await createChannelItem(channelName)

    this.setState({
      ...this.state,
      dataChannel: [channel, ...this.state.dataChannel],
      isNew: false,
      channelName: ''
    })
  }

  onChannelClick = (channel) => () => {
    Modal.operation([
      { text: 'Delete channel', onPress: () => this.deleteChannel(channel.id) },
      { text: 'View detail', onPress: () => {
        this.props.navigation.navigate('ChannelDetail', {channel})
      } },
    ]);
  };

  deleteChannel = async (id) => {
    await deleteChannelItem(id);

    let { dataChannel } = this.state;
    dataChannel = dataChannel.filter(item => item.id !== id);
    
    this.setState({...this.state, dataChannel})
  }

  render(){
    const { dataChannel, isNew, channelName } = this.state;

    return (
      <Provider>
        <View style={styles.container}>
          <ImageBackground source={bgHome} style={styles.bgHome}>
            <View style={styles.header}>
              <Button style={styles.btnBack} onPress={this.goHome}>
                <Icon style={{color: '#000'}} name="arrow-left" />
              </Button>
              <Button style={styles.btnBack} onPress={this.setFormNew(true)}>
                <Icon style={{color: '#000'}} name="plus" />
              </Button>
            </View>
            <View style={styles.content}>
              <ScrollView>
                {
                  dataChannel.map(item => {
                    return (
                      <Button onPress={this.onChannelClick(item)} key={item.id} style={styles.itemChannel} >
                        <Text style={{color: '#fff'}}>{item.name}</Text>
                      </Button>
                    )
                  })
                }
              </ScrollView>
            </View>
          </ImageBackground>

          <Modal
            title="Create new Channel"
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
                onChangeText={text => this.setInputChange(text)}
                value={channelName}
                placeholder="Channel name"
              />
            </View>
          </Modal>
        </View>
    </Provider>
    )
  }
}


export default ChannelScreen;
