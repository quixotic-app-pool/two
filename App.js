/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-05T17:41:36+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: App.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:46:16+08:00
 */



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Platform
} from 'react-native';
import RootScene from './src/RootScene';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends PureComponent<{}> {
  render() {
    return (
      <RootScene />
    );
  }
}
