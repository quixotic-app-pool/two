/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-30T08:26:48+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: UserProfileScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:53:51+08:00
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl, TouchableWithoutFeedback } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'
import Icon from 'react-native-vector-icons/Ionicons'
import PopupDialog, { SlideAnimation, DialogTitle } from 'react-native-popup-dialog'

// create a component
class UserProfileScene extends PureComponent {

  static navigationOptions = ({ navigation }) => ({
      headerTitle: '账号信息',
      headerStyle: { backgroundColor: 'white' },
      headerRight: (
          <NavigationItem
              icon={require('../../img/Public/icon_navigationItem_share2x.png')}
              onPress={()=>{
                navigation.state.params.handleShare()
              }}
          />
      ),
    });

    constructor(props: Object) {
        super(props)

        { (this: any).goShare = this.goShare.bind(this) }
    }


    componentDidMount() {
        this.props.navigation.setParams({ handleShare: this.goShare})
    }

    goShare()  {
      this.popupDialog.show();
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
              <View>
              <PopupDialog
                    ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    dialogTitle={<DialogTitle title="Dialog Title" />}
                    dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
                  >
                    <View>
                      <Text>Hello</Text>
                    </View>
                  </PopupDialog>
                  <ScrollView>
                      {this.renderCells()}
                  </ScrollView>
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
                ],
                [
                    { title: '我的订单', image: require('../../img/Mine/icon_mine_wallet2x.png') },
                ],
                [
                    { title: '我们的网站', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '我们的公众号', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '客服中心', image: require('../../img/Mine/icon_mine_customerService2x.png') },
                    { title: '关于APP', subtitle: '我要合作', image: require('../../img/Mine/icon_mine_aboutmeituan2x.png') }
                ]
            ]
        )
    }

}



//make this component available to the app
export default UserProfileScene;
