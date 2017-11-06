/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-30T09:33:00+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: UserAddressScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:41:59+08:00
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
import Button2 from '../../widget/Button2'

// create a component
class UserAddressScene extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
      headerTitle: '用户地址',
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

          { (this: any).goEditAddress = this.goEditAddress.bind(this) }
    }

    goEditAddress() {
      StatusBar.setBarStyle('default', false)
      this.props.navigation.navigate('EditAddress')
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
                <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                  <ScrollView>
                      {this.renderCells()}
                  </ScrollView>

                  <Button2 style={{position: "absolute", bottom: 0,left:0, right:0, flex: 1}} onPress={this.goEditAddress}>
                    <View style={{height: 45,flexDirection:"row", backgroundColor: "#fff", flex: 1, alignItems:"center", justifyContent: "center"}}>
                      <Icon name="ios-add-circle-outline" size={18} color="#0096ff" />
                      <Text style={{color: "#0096ff", fontSize: 14, marginLeft: 8}}>{"新增地址"}</Text>
                    </View>
                  </Button2>
                </View>

        );
    }

    getDataList() {
        return (
            [
                [
                    { title: '个人资料', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '课程管理', image: require('../../img/Mine/icon_mine_balance2x.png') },
                    { title: '认证中心', image: require('../../img/Mine/icon_mine_voucher2x.png') },
                ]
            ]
        )
    }

}



//make this component available to the app
export default UserAddressScene;
