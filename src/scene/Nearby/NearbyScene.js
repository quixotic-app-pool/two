/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: NearbyScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:36:41+08:00
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
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { color, Button, NavigationItem, RefreshListView, RefreshState, SpacingView } from '../../widget'
import { screen, system, tool } from '../../common'
import api from '../../api'
import NearbyListScene from './NearbyListScene'
import Icon from 'react-native-vector-icons/Ionicons'

// create a component
class NearbyScene extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
          <View style={styles.searchBar}>
            <TextInput
              placeholder="this is placeholder"
              placeholder="搜索学科或者老师..."
              placeholderTextColor= 'gray'
              style={{
                height: 30,
                width: 150,
                borderColor: 'white',
                fontSize: 12
              }} />
              <TouchableOpacity>
                <Icon name="ios-search" style={styles.searchIcon} size={20} color="#4F8EF7" />
              </TouchableOpacity>
          </View>
        ),
        headerLeft: (
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <Image style={{ width: 13, height: 16 }} source={require('../../img/Public/icon_food_merchant_address2x.png')} />
                <Text style={{ fontSize: 15, color: '#333333' }}> 福州 鼓楼</Text>
            </TouchableOpacity>
        ),
        headerStyle: { backgroundColor: 'white' },
    })

    state: {
        text: String
    }

    render() {
        let titles = ['大学生', '专职教师', '金牌教员', '优秀机构', '学生保姆','海归派']
        let types = [
            ['男学生', '女学生', '211', '985', '双一流', '费用', '评分', '上课时间', '数学', '语文', '英语', '全科'],
            ['男老师', '女老师', '211', '985', '费用', '评分', '上课时间'],
            ['英语培训', '应试补习', '费用', '洗浴汗蒸', '大宝剑', '电影院', '美发', '美甲'],
            []
        ]

        return (
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
                renderTabBar={() => <ScrollableTabBar />}
            >
                {titles.map((title, i) => (
                    <NearbyListScene
                        tabLabel={titles[i]}
                        key={i}
                        types={types[i]}
                        navigation={this.props.navigation} />
                ))}
            </ScrollableTabView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
});

//make this component available to the app
export default NearbyScene;
