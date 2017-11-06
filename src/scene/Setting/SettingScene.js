/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-30T08:50:11+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: SettingScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:42:18+08:00
 */



/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, TouchableWithoutFeedback } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'
import Icon from 'react-native-vector-icons/Ionicons'

// create a component
class SettingScene extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
      headerTitle: '设置',
      headerStyle: { backgroundColor: 'white' },
      headerRight: (
          <NavigationItem
              icon={require('../../img/Public/icon_navigationItem_share2x.png')}
              onPress={() => {

              }}
          />
      ),
    });

    constructor(props: Object) {
        super(props)
    }

    renderCells() {
        let cells = []
        let dataList = this.getDataList()
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
                cells.push(cell)
            }
            if(i < dataList.length-1) {
                cells.push(<SpacingView key={i} />)
            }
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        )
    }


    render() {
        return (

                <ScrollView>
                    {this.renderCells()}
                </ScrollView>

        );
    }

    getDataList() {
        return (
            [
                [
                    { title: '个人资料', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '课程管理', image: require('../../img/Mine/icon_mine_balance2x.png') },
                    { title: '认证中心', image: require('../../img/Mine/icon_mine_voucher2x.png') },
                ],
                [
                    { title: '我的订单', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                ]
            ]
        )
    }

}



//make this component available to the app
export default SettingScene;
