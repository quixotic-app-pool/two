/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MineScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:40:53+08:00
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
class MineScene extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={{ flexDirection: 'row' }}>
                <NavigationItem
                    icon={require('../../img/Mine/icon_navigationItem_set_white2x.png')}
                    onPress={() => navigation.state.params.handleSetting()}
                />
                <NavigationItem
                    icon={require('../../img/Home/icon_navigationItem_message_white2x.png')}
                    onPress={() => {

                    }}
                />
            </View>
        ),
        headerStyle: { backgroundColor: color.theme },
    })

    state: {
        isRefreshing: boolean
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            isRefreshing: false
        }

        { (this: any).goProfile = this.goProfile.bind(this) }
        { (this: any).goSetting = this.goSetting.bind(this) }
        { (this: any).goDetail = this.goDetail.bind(this) }
    }

    componentDidMount() {
        this.props.navigation.setParams({ handleSetting: this.goSetting})
    }

    goSetting()  {
      StatusBar.setBarStyle('default', false)
      this.props.navigation.navigate('Setting')
    }

    goProfile() {
      StatusBar.setBarStyle('default', false)
      this.props.navigation.navigate('UserProfile')
    }

    goDetail(sceneName: String) {
      StatusBar.setBarStyle('default', false)
      this.props.navigation.navigate(sceneName)
    }

    onHeaderRefresh() {
        this.setState({ isRefreshing: true })

        setTimeout(() => {
            this.setState({ isRefreshing: false })
        }, 2000);
    }

    renderCells() {
        let cells = []
        let dataList = this.getDataList()
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell onPress={()=>this.goDetail(data.sceneName)} image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
                cells.push(cell)
            }
            cells.push(<SpacingView key={i} />)
        }

        return (
            <View style={{ flex: 1 }}>
                {cells}
            </View>
        )
    }

    renderHeader() {
        return (
            <View style={styles.header}>

                <TouchableOpacity onPress={this.goProfile}>
                  <View style={styles.userContainer}>
                      <Image style={styles.avatar} source={require('../../img/Mine/avatar.png')} />
                      <View style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{flex: 1, marginLeft: 10, paddingVertical: 5}}>
                            <Text style={{color: "#fff", fontSize: 18}}>_平行时空</Text>
                            <View style={{marginTop: 10, flexDirection: "row"}}>
                              <Icon name="ios-phone-portrait-outline" size={14} color="#fff" />
                              <Text style={{color: "#fff", fontSize: 13, paddingLeft: 5}}>135****0418</Text>
                            </View>
                          </View>
                              <Text style={{ color: 'white', marginTop: 14, alignItems: 'flex-end' }}>个人信息 ></Text>
                      </View>
                  </View>
                </TouchableOpacity>

                <View style={styles.numbers}>
                  <TouchableWithoutFeedback>
                    <View style={styles.numItem}>
                        <Text style={{color: "#f90", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"999999.0元"}</Text>
                        <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"余额"}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <View style={[styles.numItem,{borderLeftWidth: 1, borderLeftColor: "#f5f5f5",borderRightWidth: 1, borderRightColor: "#f5f5f5"}]}>
                        <Text style={{color: "#ff5f3e", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"1940个"}</Text>
                        <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"优惠"}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback>
                    <View style={styles.numItem}>
                        <Text style={{color: "#6ac20b", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"999999分"}</Text>
                        <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"积分"}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: color.background }}>
                <View style={{ position: 'absolute', width: screen.width, height: screen.height / 2, backgroundColor: color.theme }} />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        );
    }

    getDataList() {
        return (
            [
                [
                    { title: '个人资料', sceneName: 'UserProfile', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '我的地址', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '课程管理', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_balance2x.png') },
                    { title: '认证中心', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_voucher2x.png') },
                    { title: '我的评价', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_membercard2x.png') },
                    { title: '用户评论', sceneName: 'UserComment', image: require('../../img/Mine/icon_mine_membercard2x.png') },
                    { title: '分享我的主页', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_balance2x.png') },
                    { title: '邀请其他老师', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_voucher2x.png') },
                    { title: '我的收藏', sceneName: 'Favorite', image: require('../../img/Mine/icon_mine_collection2x.png') }
                ],
                [
                    { title: '我的订单', sceneName: 'Order', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '我的钱包', sceneName: 'UserAddress', subtitle: '办信用卡', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                    { title: '余额', sceneName: 'UserAddress', subtitle: '￥95872385', image: require('../../img/Mine/icon_mine_balance2x.png') },
                    { title: '我的老师', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_voucher2x.png') },
                    { title: '我的精选课程', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_membercard2x.png') },
                    { title: '邀请好友', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_membercard2x.png') }
                ],
                [
                    { title: '我们的网站', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '我们的公众号', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '客服中心', sceneName: 'UserAddress', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '关于APP', sceneName: 'UserAddress', subtitle: '我要合作', image: require('../../img/Mine/icon_mine_aboutmeituan2x.png') }
                ]
            ]
        )
    }

}

// define your styles
const styles = StyleSheet.create({
    header: {
        backgroundColor: color.theme,
    },
    icon: {
        width: 27,
        height: 27,
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    },
    numbers: {
      flexDirection: "row",
      backgroundColor: "#fff",
      height: 74
    },
    numItem: {
      flex: 1,
      height: 74,
      justifyContent: "center",
      alignItems: "center"
    }
    });

//make this component available to the app
export default MineScene;
