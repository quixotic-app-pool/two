/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-30T10:45:54+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: UserCommentScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:42:37+08:00
 */



/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { PureComponent } from 'react'
import { View } from 'react-native'


import { NavigationItem } from '../../widget'

import UserComment from './Comment'

export default class UserCommentScene extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
      headerTitle: '用户评论',
      headerStyle: { backgroundColor: 'white' },
      headerRight: (
          <NavigationItem
              icon={require('../../img/Public/icon_navigationItem_share2x.png')}
              onPress={() => {

              }}
          />
      ),
    });


  render(){
    return (
      <View style={{flex: 1}}>
        <UserComment />
      </View>
    )

  }

}
