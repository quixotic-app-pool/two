/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: GroupPurchaseCell.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-07T18:07:58+08:00
 */


//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen } from '../../common'
import { color } from '../../widget'
var screenWidth = Dimensions.get('window').width

let count = 0;
// create a component
class GroupPurchaseCell extends PureComponent {

    render() {
        let { info } = this.props

        // let certs = info.cert
        return (
            <TouchableOpacity  style={styles.container} onPress={() => this.props.onPress(info)}>
              <View style={styles.innercontainer}>
                <Image source={{ uri: info.imageUrl }} style={styles.icon} />
                <View style={styles.rightContainer}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                      <Text style={{fontSize:18}}>{info.name}</Text>
                      <Text style={{fontSize:18, color: 'gold'}}>{info.price}</Text>
                    </View>
                    <View style={{paddingVertical: 5, opacity: 0.5}}>
                      <Text style={{fontSize: 12}}>{info.college} | {info.position}</Text>
                      <Text style={{fontSize: 12,paddingTop: 5}}>{info.major}</Text>
                    </View>
                    <View>

                      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                        <View style={{marginTop:5, opacity: 0.5, padding:2,marginRight:5}}>
                          <Text style={{fontSize: 12,fontWeight:'bold',color: 'rgb(28,199,97)'}}>证书:  </Text>
                        </View>
                        {
                          info.certs.map((item, index)=> {
                            return (
                              <View style={styles.certs} key={index}>
                                <Text style={styles.certText}>{item}</Text>
                              </View>
                            )
                          }
                        )
                        }
                      </View>
                    </View>
                </View>
              </View>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    certs: {
      marginTop:5,
      opacity: 0.5,
      padding:2,
      marginRight:5,
      borderWidth:1,
      borderRadius:5,
      borderColor: 'gold'
    },
    certText: {
      fontSize: 12
    },
    container: {
      padding: 5,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    innercontainer: {
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
      shadowOpacity:0.2,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
    },
    price: {
        color: color.theme
    }
});

//make this component available to the app
export default GroupPurchaseCell;
