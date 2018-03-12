import React, {Component} from 'react';
import {Routes} from './src/config/Routes';
import {AppRegistry, AsyncStorage} from 'react-native';

let userAccount = null;
let temp = async () => {
  await AsyncStorage.getItem('token').then(response => {
    userAccount.token = response
  })
}

if (userAccount === null) {
}

export default class App extends Component {
  render() {
    return (
      <Routes userAccount={userAccount}/>
    );
  }
}

AppRegistry.registerComponent('App')