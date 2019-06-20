import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Next extends Component {
  static navigationOptions = {
    title: 'Next'
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.navigation.getParam('text')}</Text>
      </View>
    );
  }
}