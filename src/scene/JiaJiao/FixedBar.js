/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T11:16:26+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: StickyBar.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T11:36:13+08:00
 */

 import React, { Component } from 'react'
 import {
   View,
   Text,
   Easing,
   Animated,
   Platform,
   StyleSheet,
   Dimensions,
   ScrollView,
   TouchableWithoutFeedback
 } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons'
 import px2dp from '../../common/px2dp'
 let {width, height} = Dimensions.get('window')

 export default class FixedBar extends Component{
     constructor(props){
       super(props)
     }
     render(){
       let { list, lens } = this.props
       return (
         <View style={styles.cartView}>
           <View style={styles.cartBar}>

               <View style={{flex: 1, justifyContent:"center", paddingLeft: px2dp(70)}}>
                 {
                   !lens.maxPrice?
                     (<Text style={{color: "#999", fontWeight: "bold"}}>{"购物车为空"}</Text>):
                     [<Text key={0} style={{color: "#fff", fontWeight: "bold", fontSize: px2dp(16)}}>{`￥${lens.maxPrice}`}</Text>,
                     <Text key={1} style={{color: "#fff", fontSize: px2dp(10)}}>{"另加7元配送费"}</Text>]
                 }
               </View>
               {!lens.maxPrice?
                 <Text style={styles.price}>{"￥6元起"}</Text>:
                 <Text style={[styles.price, {backgroundColor:"#00c257", color:"#fff"}]}>{"去结算"}</Text>}

           </View>
         </View>
       )
     }
 }

 const styles = StyleSheet.create({
   cartView: {
     position: "absolute",
     left: 0,
     bottom: 0,
     right: 0,
     width,
     height: px2dp(46) + 10,
     zIndex: 100
   },
   count: {
     backgroundColor: "#f00",
     height: px2dp(12),
     borderRadius: 5,
     overflow: "hidden",
     paddingHorizontal: 4,
     alignItems: "center",
     position: "absolute",
     top: 0,
     right: 0
   },
   iconWrap: {
     position: "absolute",
     left: 16,
     top: 0,
     width: px2dp(46),
     height: px2dp(46)
   },
   iconView: {
     backgroundColor: "#333",
     overflow:"hidden",
     borderRadius: px2dp(23),
     width: px2dp(46),
     height: px2dp(46),
     borderWidth: 4,
     borderColor: "#555",
     alignItems: "center",
     justifyContent: "center"
   },
   cartBar: {
     position: "absolute",
     left: 0,
     bottom: 0,
     right: 0,
     width,
     height: px2dp(46),
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     backgroundColor: "rgba(0,0,0,.9)"
   },
   price: {
     color: "#999",
     fontWeight: "bold",
     fontSize: px2dp(16),
     paddingHorizontal: 20,
     height:px2dp(46),
     lineHeight: Platform.OS === 'ios'?px2dp(46):32,
     backgroundColor:"rgba(255,255,255,.1)"
   },
   blur: {
     flex: 1,
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between"
   }
 })
