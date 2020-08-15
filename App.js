import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import AppNavigation from './src/navigators';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {flex: 1},
});
