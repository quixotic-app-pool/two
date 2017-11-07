/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: GroupPurchaseCell.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-07T17:53:46+08:00
 */


//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen } from '../../common'
import { color } from '../../widget'
var screenWidth = Dimensions.get('window').width

let count = 0;
// create a component
class GroupPurchaseCell extends PureComponent {

    render() {
        let { info } = this.props
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>

                <View style={styles.innerContainer}>
                    <View style={{paddingBottom:5, flexDirection: 'row', justifyContent:'space-between'}}>
                      <Text style={{fontSize:18, color: 'rgb(28,199,97)'}}>费用范围： </Text>
                      <Text style={{fontSize:18, color: 'gold'}}>{info.priceRange}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between',  opacity: 0.5}}>
                      <Text style={styles.textSize}>年级：{info.grade}</Text>
                      <Text style={styles.textSize}>性别： {info.gender}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent:'space-between',  opacity: 0.5}}>
                      <Text style={styles.textSize}>科目： {info.subject}</Text>
                      <Text style={styles.textSize}>希望老师类型：{info.preference}</Text>
                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.textSize}>地址： {info.address}</Text>
                    </View>
                    <View style={styles.textView}>
                      <Text style={styles.textSize}>上课时间要求： {info.timePrefered}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    innerContainer: {
      width: screenWidth - 20,
      padding: 10,
      borderTopWidth: screen.onePixel * 2,
      borderBottomWidth: screen.onePixel * 2,
      borderLeftWidth: screen.onePixel * 2,
      borderRightWidth: screen.onePixel * 2,
      borderRadius: 5,
      borderColor: color.border,
      backgroundColor: 'white',
      shadowRadius:1,
      shadowOffset:{width:1, height:2},
      shadowOpacity:0.2
    },
    container: {
        padding: 5,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textSize: {
      fontSize: 14
    },
    textView: {
      paddingVertical: 2,
      opacity: 0.5
    }
});

//make this component available to the app
export default GroupPurchaseCell;
