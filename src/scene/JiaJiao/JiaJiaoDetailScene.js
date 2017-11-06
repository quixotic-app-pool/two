/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T10:02:09+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiajiaoDetailScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T17:43:47+08:00
 */

//用到表格可以考虑这个轮子
// https://github.com/Gil2015/react-native-table-component

//页面下面的collapse再动画放大的效果不错，可以考虑加入
// https://github.com/oblador/react-native-collapsible

  //import liraries
  import React, { PureComponent } from 'react'
  import { View, Text, StyleSheet } from 'react-native'
  import FixedBar from './FixedBar'
  import Swiper from 'react-native-swiper';

  // create a component
  class JiaJiaoDetailScene extends PureComponent {

      static navigationOptions = ({ navigation }) => ({
          title: 'XXX老师',
          headerStyle: { backgroundColor: 'white' },
      })

      constructor(props: Object) {
          super(props)
          this.state = {
            selected: [],
            lens: {}
          }
      }

      render() {
          return (
              <View style={styles.container}>
              <View style={{height: 200}}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                  <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                  </View>
                  <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                  </View>
                  <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                  </View>
                </Swiper>
              </View>
               <Text>老师介绍</Text>
               <FixedBar ref={"shopbar"} list={this.state.selected} lens={this.state.lens}/>
              </View>
          );
      }

  }

  // define your styles
  const styles = StyleSheet.create({
      container: {
          backgroundColor: 'white',
          flex: 1
      },
      wrapper: {
       },
       slide1: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#9DD6EB',
       },
       slide2: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#97CAE5',
       },
       slide3: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#92BBD9',
       },
       text: {
         color: '#fff',
         fontSize: 30,
         fontWeight: 'bold',
       }
  });

  //make this component available to the app
  export default JiaJiaoDetailScene;
