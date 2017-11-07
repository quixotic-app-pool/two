/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T10:02:09+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiajiaoDetailScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-07T12:40:38+08:00
 */

//用到表格可以考虑这个轮子
// https://github.com/Gil2015/react-native-table-component


  //import liraries
  import React, { PureComponent } from 'react'
  import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
  import FixedBar from './FixedBar'
  import Swiper from 'react-native-swiper';
  import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
  import { RaisedTextButton } from '../../widget/react-native-material-buttons';

  var screenWidth = Dimensions.get('window').width
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
            lens: {},
          }
      }
      render() {
        const tableHead = ['', '周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        const tableTitle = ['上午', '下午', '晚上'];
        const tableData = [
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', ''],
          ['', '', '', '', '', '', '']
        ];
          return (
              <View  style={styles.container}>
                <ScrollView>
                  <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <View style={{height: 120}}>
                      <Swiper style={styles.wrapper} showsButtons={false}>
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
                     <View style={{ width: screenWidth, flexDirection: 'row', justifyContent: 'center', top: 120, position: 'relative'}}>
                      <View style={{ shadowRadius:1, shadowOffset:{width:1, height:2},shadowOpacity:0.2, borderRadius: 20, top: -20,height: 100, width: 200, flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
                        <View style={{height: 50, flexDirection: 'row', justifyContent: 'center', width: 200, position: 'relative'}}>
                          <Text style={{lineHeight: 50, fontSize: 20}}>老师介绍</Text>
                        </View>
                        <View>
                          <RaisedTextButton onPress={()=>{}} style={{width: 150, borderRadius: 10, backgroundColor: 'rgba(28,199,97,.9)'}} rippleDuration={600} rippleOpacity={0.54} title='联系老师'   color='#039BE5' titleColor='white' />
                        </View>
                      </View>
                     </View>

                     <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth, borderTopWidth: 10, borderTopColor: 'rgb(237,237,237)',borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                      <Text style={{flex: 1, paddingLeft: 10}}>更新时间</Text>
                      <Text style={{flex: 1, paddingLeft: 10}}>2017年11月20号</Text>
                     </View>

                     <View style={{borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>姓名：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>天山童姥</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>性别：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>男</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>年龄：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>99</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>学历：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>超级博士后留级中</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>目前身份：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>在读研究生/专职老师</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>居住地：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>北冰洋</Text>
                        </View>
                     </View>

                     <View style={{borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>在读或者毕业学校：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>南师大</Text>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                          <Text style={{flex: 1, paddingLeft: 10}}>专业：</Text>
                          <Text style={{flex: 1, paddingLeft: 10}}>传统垃圾回收的哲学思考与出路</Text>
                        </View>
                     </View>

                     <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                      <Text>所获证书：</Text>
                      <View>
                        <Text>英语四级</Text>
                        <Text>英语留级</Text>
                        <Text>司法考试</Text>
                      </View>
                     </View>

                     <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                      <Text>自我介绍：</Text>
                      <Text>风流倜傥，玉树临风的当代泽铭兄台</Text>
                     </View>

                     <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                       <Text>可教授科目</Text>
                       <View>
                        <Text>小学数学</Text>
                        <Text>高中物理</Text>
                        <Text>作业辅导</Text>
                       </View>
                     </View>

                     <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                       <Text>可授课城区</Text>
                       <View>
                        <Text>白下区</Text>
                        <Text>鼓楼区</Text>
                        <Text>栖霞区</Text>
                       </View>
                     </View>

                     <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                       <Text>家教经历</Text>
                       <View>
                        <Text>2015~2017</Text>
                        <Text>给陈同学教授英语</Text>
                       </View>
                       <View>
                        <Text>2013~2015</Text>
                        <Text>在新东方任职英语教师</Text>
                       </View>
                     </View>


                     <View style={{width: screenWidth,  paddingHorizontal: 10}}>
                      <Text>可授课时间</Text>
                      <Table>
                        <Row data={tableHead} flexArr={[1, 1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
                        <TableWrapper style={{flexDirection: 'row'}}>
                          <Col data={tableTitle} style={styles.title} heightArr={[28,28]} textStyle={styles.text}/>
                          <Rows data={tableData} flexArr={[1, 1, 1, 1, 1, 1, 1]} style={styles.row}/>
                        </TableWrapper>
                      </Table>
                     </View>


                    </View>
                    <View style={{height: 200}}>
                  </View>
                </ScrollView>
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
       },
       head: { height: 40, backgroundColor: '#f1f8ff' },
       title: { flex: 1, backgroundColor: '#f6f8fa' },
       row: { height: 28 },
       text: { textAlign: 'center' }
  });

  //make this component available to the app
  export default JiaJiaoDetailScene;
