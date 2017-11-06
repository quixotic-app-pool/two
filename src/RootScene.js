/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-10-03T21:57:05+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: RootScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T17:44:59+08:00
 */

//import liraries
import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import color from './widget/color'
import { screen, system, tool } from './common'
import TabBarItem from './widget/TabBarItem'

// import JiazhangDetailScene from './scene/Jiazhang/JiazhangDetailScene'
// import JiajiaoDetailScene from './scene/Jiajia/JiajiaoDetailScene'
import JiaZhangFormScene from './scene/JiaZhang/JiaZhangFormScene'
import JiaJiaoFormScene from './scene/JiaJiao/JiaJiaoFormScene'
import DingdanScene from './scene/Dingdan/DingdanScene'

import HomeScene from './scene/Home/HomeScene'
import NearbyScene from './scene/Nearby/NearbyScene'
import MessageScene from './scene/Message/MessageScene'
import MineScene from './scene/Mine/MineScene'
import UserProfileScene from './scene/UserProfile/UserProfileScene'
import SettingScene from './scene/Setting/SettingScene'
import UserAddressScene from './scene/UserAddress/UserAddressScene'
import EditAddressScene from './scene/UserAddress/EditAddressScene'
import UserCommentScene from './scene/Comment/UserCommentScene'
import FavoriteScene from './scene/Favorite/FavoriteScene'
import OrderScene from './scene/Order/OrderScene'
import ChatScene from './scene/Chat/ChatScene'


import WebScene from './widget/WebScene'
import GroupPurchaseScene from './scene/GroupPurchase/GroupPurchaseScene'

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

// create a component
class RootScene extends PureComponent {
    constructor() {
        super()

        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator
                onNavigationStateChange={
                    (prevState, currentState) => {
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene) {
                            if (lightContentScenes.indexOf(currentScene) >= 0) {
                                StatusBar.setBarStyle('light-content')
                            } else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: JiaZhangFormScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected2x.png')}
                    />
                )
            }),
        },
        Nearby: {
            screen: NearbyScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '推荐',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected2x.png')}
                    />
                )
            }),
        },

        Message: {
            screen: MessageScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '消息',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_order2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected2x.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine2x.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected2x.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },
        Web: { screen: WebScene },
        GroupPurchase: { screen: GroupPurchaseScene },
        Nearby: { screen: NearbyScene },
        UserProfile: { screen: UserProfileScene },
        Setting: { screen: SettingScene },
        UserAddress: { screen: UserAddressScene },
        EditAddress: { screen: EditAddressScene },
        UserComment: { screen: UserCommentScene },
        Favorite: { screen: FavoriteScene },
        Order: { screen: OrderScene },
        Chat: { screen: ChatScene }
    },
    {
        navigationOptions: {
            // headerStyle: { backgroundColor: color.theme }
            headerBackTitle: null,
            headerTintColor: '#333333',
            showIcon: true,
        },
    }
);
//make this component available to the app
export default RootScene;
