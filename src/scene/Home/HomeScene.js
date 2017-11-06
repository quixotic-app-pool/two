/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: HomeScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:32:12+08:00
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
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList, SectionList } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { color, Button, NavigationItem, SearchBar, SpacingView } from '../../widget'

import { screen, system } from '../../common'
import api from '../../api'


import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'
import Icon from 'react-native-vector-icons/Ionicons'
import ActionButton from 'react-native-action-button'

// create a component
class HomeScene extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar} onPress={()=>navigation.state.params.handleSearch()}>
                <Paragraph>搜索学科或者老师...</Paragraph>
                <Icon name="ios-search" style={styles.searchIcon} size={20} color="#4F8EF7" />
            </TouchableOpacity>
        ),
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
        headerLeft: (
            <NavigationItem
                title='陈尼玛作品'
                titleStyle={{ color: 'white' }}
                onPress={() => {

                }}
            />
        ),
        headerStyle: { backgroundColor: color.theme },
    })

    state: {
        discounts: Array<Object>,
        dataList: Array<Object>,
        refreshing: boolean,
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }

        { (this: any).goSetting = this.goSetting.bind(this) }
        { (this: any).goSearch = this.goSearch.bind(this) }
        { (this: any).requestData = this.requestData.bind(this) }
        { (this: any).renderCell = this.renderCell.bind(this) }
        { (this: any).onCellSelected = this.onCellSelected.bind(this) }
        { (this: any).keyExtractor = this.keyExtractor.bind(this) }
        { (this: any).renderHeader = this.renderHeader.bind(this) }
        { (this: any).onGridSelected = this.onGridSelected.bind(this) }
        { (this: any).onMenuSelected = this.onMenuSelected.bind(this) }
    }

    componentDidMount() {
        this.requestData();
        this.props.navigation.setParams({ handleSearch: this.goSearch, handleSetting: this.goSetting })
        // this.props.navigation.setParams({ handleSetting: this.goSetting })
    }

    goSetting()  {
      StatusBar.setBarStyle('default', false)
      this.props.navigation.navigate('Setting')
    }

    goSearch()  {
      StatusBar.setBarStyle('default', false)
      this.props.navigation.navigate('Nearby')
    }

    requestData() {
        this.setState({ refreshing: true })

        this.requestDiscount()
        this.requestRecommend()
    }

    async requestRecommend() {
        try {
            let response = await fetch(api.recommend)
            let json = await response.json()

            let dataList = json.data.map(
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            this.setState({ refreshing: false })
        }
    }

    async requestDiscount() {
        try {
            let response = await fetch(api.discount)
            let json = await response.json()
            /* 现在用dummydata，后面再走服务器测试*/
            this.setState({ discounts: json.data })
        } catch (error) {
            alert(error)
        }
    }

    renderCell(info: Object) {
        return (
            <GroupPurchaseCell
                info={info.item}
                onPress={this.onCellSelected}
            />
        )
    }

    onCellSelected(info: Object) {
        StatusBar.setBarStyle('default', false)
        this.props.navigation.navigate('GroupPurchase', { info: info })
    }

    keyExtractor(item: Object, index: number) {
        return item.id
    }

    renderHeader() {
        return (
            <View>
                <TouchableOpacity>
                  <View style={{height: 90, paddingHorizontal: 5, marginVertical: 10}}>
                    <Image source={require('../../img/Home/ad1.png')} style={{height: 90, width: screen.width - 10, resizeMode: 'cover'}}/>
                  </View>
                </TouchableOpacity>
                <HomeGridView infos={this.state.discounts} onGridSelected={(this.onGridSelected)} />
                <SpacingView />

                <HomeMenuView menuInfos={api.menuInfo} onMenuSelected={this.onMenuSelected} />
            </View>
        )
    }

    onGridSelected(index: number) {
        let discount = this.state.discounts[index]

        if (discount.type == 1) {
            StatusBar.setBarStyle('default', false)

            let location = discount.tplurl.indexOf('http')
            let url = discount.tplurl.slice(location)
            this.props.navigation.navigate('Web', { url: url })
        }
    }

    onMenuSelected(index: number) {
        alert(index)
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                      {key:"$key1", title: "推荐拼团", data: this.state.dataList},
                      {key:"$key2", data: [{
                          id: 42436635,
                          imageUrl: "https:\/\/beebom.com\/reverse-image-search-engines-apps-uses\/",
                          title: "test",
                          subtitle: "test",
                          price: 3
                      }], title: "推荐大学生家教"},
                      {key:"$key3", data: [{
                          id: 42332535,
                          imageUrl: "https:\/\/beebom.com\/reverse-image-search-engines-apps-uses\/",
                          title: "test",
                          subtitle: "test",
                          price: 3
                      }], title: "推荐专职教师"},
                      {key:"$key4", data: [{
                          id: 42467535,
                          imageUrl: "https:\/\/beebom.com\/reverse-image-search-engines-apps-uses\/",
                          title: "test",
                          subtitle: "test",
                          price: 3
                      }], title: "推荐优秀学习机构"}
                    ]
                    }
                    keyExtractor={this.keyExtractor}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    renderSectionHeader= {({section}) =>
                      <View>
                        <SpacingView />
                        <View style={styles.recommendHeader}>
                            <Heading2>{section.title}</Heading2>
                        </View>
                      </View>
                    }
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderCell}
                />

                <View style={{bottom: 120, flex:1, backgroundColor: '#f3f3f3'}}>
                  <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                      <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                      <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                      <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                  </ActionButton>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    searchBar: {
        width: screen.width * 0.5,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
        alignItems: 'flex-end',
    },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  }
});

//make this component available to the app
export default HomeScene;
