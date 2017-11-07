/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: HomeScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-07T18:52:40+08:00
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList, SectionList, Dimensions } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { color, Button, NavigationItem, SearchBar, SpacingView } from '../../widget'

import { screen, system } from '../../common'
import api from '../../api'


import HomeMenuView from './HomeMenuView'
import HomeGridView from './HomeGridView'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'
import ListCell2 from '../GroupPurchase/ListCell2'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import ActionButton from 'react-native-action-button'
import { RaisedTextButton } from '../../widget/react-native-material-buttons';

var screenWidth = Dimensions.get('window').width
// create a component
class HomeScene extends PureComponent {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <TouchableOpacity style={styles.searchBar} onPress={()=>navigation.state.params.handleSearch()}>
                <Paragraph style={{marginLeft: 10}}>筛选老师...</Paragraph>
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
                title='泽铭作品'
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
    // renderCell(info: Object) {
    //     return (
    //         <ListCell2
    //             info={info.item}
    //             onPress={this.onCellSelected}
    //         />
    //     )
    // }

    onCellSelected(info: Object) {
        StatusBar.setBarStyle('default', false)
        this.props.navigation.navigate('GroupPurchase', { info: info })
    }

    keyExtractor(item: Object, index: number) {
        return item.id
    }
    //
    // renderHeader() {
    //     return (
    //         <View>
    //           <Text>nothing</Text>
    //         </View>
    //     )
    // }
    renderHeader() {
        return (
            <View>
                <View style={{height: 120, marginTop:20, width: screenWidth, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <View style={{flex:1, paddingHorizontal:10}}>
                    <RaisedTextButton titleStyle={{fontSize:18}} onPress={this._collapseAlavailableKagaku} style={{width: (screenWidth - 50)/2, height:100, borderRadius:5}} rippleDuration={600} rippleOpacity={0.54} title='找老师'   color='#039BE5' titleColor='white' />
                  </View>
                  <View style={{flex:1, paddingRight:10}}>
                    <RaisedTextButton titleStyle={{fontSize:18}} onPress={this._collapseAlavailableKagaku} style={{width: (screenWidth - 50)/2, height:60, borderRadius:5,marginBottom: 10}} rippleDuration={600} rippleOpacity={0.54} title='发英雄帖'   color='#039BE5' titleColor='white' />
                    <RaisedTextButton titleStyle={{fontSize:18}} onPress={this._collapseAlavailableKagaku} style={{width: (screenWidth - 50)/2, height:40, borderRadius:5}} rippleDuration={600} rippleOpacity={0.54} title='找学生'   color='#039BE5' titleColor='white' />
                  </View>
                </View>

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
        const teacherInfo = [
          {key:"$key2", data: [{
              id: 424366351,
              imageUrl: "http:\/\/i.telegraph.co.uk\/multimedia\/archive\/03491\/Vladimir_Putin_1_3491835k.jpg",
              name: "牛老师",
              price: "$100起",
              college: '南京师范大学',
              position: '在读研究生',
              major: '电气工程及其自动化',
              certs: ['英语六级', '穿越火线第一名', '宿舍阿姨明星奖', '屌丝逆袭第一名', '雅思'],
          },{
              id: 4243663512,
              imageUrl: "http:\/\/i.telegraph.co.uk\/multimedia\/archive\/03491\/Vladimir_Putin_1_3491835k.jpg",
              name: "牛老师",
              price: "$100起",
              college: '南京师范大学',
              position: '在读研究生',
              major: '电气工程及其自动化',
              certs: ['英语六级', '穿越火线第一名', '宿舍阿姨明星奖', '屌丝逆袭第一名', '雅思'],
          },{
              id: 4243663513,
              imageUrl: "http:\/\/i.telegraph.co.uk\/multimedia\/archive\/03491\/Vladimir_Putin_1_3491835k.jpg",
              name: "牛老师",
              price: "$100起",
              college: '南京师范大学',
              position: '在读研究生',
              major: '电气工程及其自动化',
              certs: ['英语六级', '穿越火线第一名', '宿舍阿姨明星奖', '屌丝逆袭第一名', '雅思'],
          },{
              id: 4243663514,
              imageUrl: "http:\/\/i.telegraph.co.uk\/multimedia\/archive\/03491\/Vladimir_Putin_1_3491835k.jpg",
              name: "牛老师",
              price: "$100起",
              college: '南京师范大学',
              position: '在读研究生',
              major: '电气工程及其自动化',
              certs: ['英语六级', '穿越火线第一名', '宿舍阿姨明星奖', '屌丝逆袭第一名', '雅思'],
          }], title: "最新老师"},
        ]
        var orderInfo = [
          {key:"$key2", data: [{
              id: 424366351,
              priceRange: "$100~150元/时",
              grade: "小学二年级",
              gender: '男生',
              subject: '语文',
              preference: '男老师',
              address: '龙江新城市广场2栋201单元',
              timePrefered: '一周三次 | 每次二小时',
              otherRequirement: '有家教经验，耐心，可以给孩子有邻家姐姐或者哥哥的感觉，咳咳'
          },{
              id: 4243663513,
              priceRange: "$100~150元/时",
              grade: "小学二年级",
              gender: '男生',
              subject: '语文',
              preference: '男老师',
              address: '龙江新城市广场2栋201单元',
              timePrefered: '一周三次 | 每次二小时',
              otherRequirement: '有家教经验，耐心，可以给孩子有邻家姐姐或者哥哥的感觉，咳咳'
          },{
              id: 4243663514,
              priceRange: "$100~150元/时",
              grade: "小学二年级",
              gender: '男生',
              subject: '语文',
              preference: '男老师',
              address: '龙江新城市广场2栋201单元',
              timePrefered: '一周三次 | 每次二小时',
              otherRequirement: '有家教经验，耐心，可以给孩子有邻家姐姐或者哥哥的感觉，咳咳'
          }], title: "最新学员"},
        ]
        return (
            <View style={styles.container}>
                <SectionList
                    sections={
                      teacherInfo
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
                    <ActionButton.Item textContainerStyle={{borderRadius:5, backgroundColor: 'gold'}} buttonColor='#9b59b6' title="筛选老师" onPress={() => console.log("notes tapped!")}>
                      <MaterialIcon name="file-find" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item textContainerStyle={{borderRadius:5, backgroundColor: 'gold'}} buttonColor='#3498db' title="发英雄帖" onPress={() => {}}>
                      <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item textContainerStyle={{borderRadius:5, backgroundColor: 'gold'}} buttonColor='#f6546a' title="赏金猎人" onPress={() => {}}>
                      <MaterialIcon name="find-replace" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item textContainerStyle={{borderRadius:5, backgroundColor: 'gold'}} buttonColor='#00ffff' title="您的消息" onPress={() => {}}>
                      <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item textContainerStyle={{borderRadius:5, backgroundColor: 'gold'}} buttonColor='#ffa500' title="老师度天劫" onPress={() => {}}>
                      <MaterialIcon name="update" style={styles.actionButtonIcon}/>
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
        justifyContent: 'space-between',
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
    fontSize: 25,
    height: 25,
    color: 'white',
  }
});

//make this component available to the app
export default HomeScene;
