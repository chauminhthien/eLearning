import * as Constant from './../constants';
import AsyncStorage from '@react-native-community/async-storage';

export const getChannel = async () => {
  return storeData() || [];
}

export const createChannel = async (name) => {
  const id = +(new Date());
  const dataN = {
    name,
    id: id,
    data: []
  }

  const channel = await getChannel();
  channel.push(dataN);
  await setStoreData(channel);
  return dataN;
}

export const createWordForChannel = async (data, idChannel) => {
  const id = +(new Date());
  const dataN = {
    id,
    en: data.en || '',
    vn: data.vn || '',
  }

  let channel = await getChannel();

  channel = channel.map(item => {
    if(item.id === idChannel){
      if(!item.data) item.data = [];
      item.data.push(dataN);
    }
    return item;
  })
  await setStoreData(channel);
  return dataN;
}

export const deleteWordItem = async (id, idChannel) => {
  let channel = await getChannel();

  channel = channel.map(item => {
    if(item.id === idChannel){
      item.data = item.data.filter(it => it.id !== id);
    }
    return item;
  })
  return {id, idChannel}
}

export const deleteChannel = async (id) => {
  let channel = await getChannel();
  channel = channel.filter(item => item.id !== id);
  await setStoreData(channel);
  return id;
}

const storeData = async () => {
  let data = {};
  try {
    data = await AsyncStorage.getItem(Constant.STORE_APP_CHANNEL) || '[]';
    data = JSON.parse(data)
  } catch (e) {
    // saving error
  }
  return data;
}

const setStoreData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(Constant.STORE_APP_CHANNEL, jsonValue);
  } catch (e) {
    // saving error
  }
}

