/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-30T17:07:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MessageScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T09:59:05+08:00
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, ListView, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import api from '../../api'
import { color, DetailCell, RefreshListView, RefreshState, SpacingView } from '../../widget'

import OrderMenuItem from '../Order/OrderMenuItem'
import GroupPurchaseCell from '../GroupPurchase/GroupPurchaseCell'

// create a component
class MessageScene extends PureComponent {

    listView: ListView

    state: {
        dataSource: ListView.DataSource
    }

    static navigationOptions = ({ navigation }) => ({
        title: '消息中心',
        headerStyle: { backgroundColor: 'white' },
    })

    constructor(props: Object) {
        super(props)

        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this.listView.startHeaderRefreshing();
    }

    async requestData() {
        try {
            let response = await fetch(api.recommend)
            let json = await response.json()

            console.log(JSON.stringify(json));

            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
            dataList.sort(() => { return 0.5 - Math.random() })

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(dataList)
            })
            setTimeout(() => {
                this.listView.endRefreshing(RefreshState.NoMoreData)
            }, 500)
        } catch (error) {
            this.listView.endRefreshing(RefreshState.Failure)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader(this.listView)}
                <RefreshListView
                    style={{backgroundColor: color.background}}
                    ref={(e) => this.listView = e}
                    dataSource={this.state.dataSource}
                    renderHeader={() =>{}}
                    renderRow={(rowData) =>
                        <GroupPurchaseCell
                            info={rowData}
                            onPress={() => {
                                StatusBar.setBarStyle('default', false)
                                this.props.navigation.navigate('Chat', { info: rowData })
                            }}
                        />
                    }
                    onHeaderRefresh={() => this.requestData()}
                />
            </View>
        );
    }

    renderHeader(listView) {
        return (
            <View style={styles.container}>

                <View style={styles.itemContainer}>
                    <OrderMenuItem onPress={()=>listView.startHeaderRefreshing()} title='消息' icon={require('../../img/Order/order_tab_need_pay2x.png')} />
                    <OrderMenuItem onPress={()=>listView.startHeaderRefreshing()} title='通知' icon={require('../../img/Order/order_tab_need_use2x.png')} />
                </View>

                <SpacingView />
            </View>
        )
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'

    },
    itemContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          borderTopWidth: screen.onePixel,
          borderLeftWidth: screen.onePixel,
          borderColor: color.border
    },
});

//make this component available to the app
export default MessageScene;
