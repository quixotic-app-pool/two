/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-07T12:26:22+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiaZhangDetailScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-07T12:39:51+08:00
 */

   //import liraries
   import React, { PureComponent } from 'react'
   import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
   import FixedBar from '../JiaJiao/FixedBar'
   import Swiper from 'react-native-swiper';
   import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
   import { RaisedTextButton } from '../../widget/react-native-material-buttons';

   var screenWidth = Dimensions.get('window').width
   // create a component
   class JiaZhangDetailScene extends PureComponent {

       static navigationOptions = ({ navigation }) => ({
           title: '家教需求单',
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
                           <Text style={{lineHeight: 50, fontSize: 20}}>学员单</Text>
                         </View>
                         <View>
                           <RaisedTextButton onPress={()=>{}} style={{width: 150, borderRadius: 10, backgroundColor: 'rgba(28,199,97,.9)'}} rippleDuration={600} rippleOpacity={0.54} title='申请授课'   color='#039BE5' titleColor='white' />
                         </View>
                       </View>
                      </View>

                      <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth, borderTopWidth: 10, borderTopColor: 'rgb(237,237,237)',borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                       <Text style={{flex: 1, paddingLeft: 10}}>发布时间</Text>
                       <Text style={{flex: 1, paddingLeft: 10}}>2017年11月20号</Text>
                      </View>

                      <View style={{borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                         <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                           <Text style={{flex: 1, paddingLeft: 10}}>学员性别：</Text>
                           <Text style={{flex: 1, paddingLeft: 10}}>男</Text>
                         </View>
                         <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                           <Text style={{flex: 1, paddingLeft: 10}}>学员年级：</Text>
                           <Text style={{flex: 1, paddingLeft: 10}}>哈佛佛学院</Text>
                         </View>

                         <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                           <Text style={{flex: 1, paddingLeft: 10}}>居住地：</Text>
                           <Text style={{flex: 1, paddingLeft: 10}}>火星十三区9011栋地下29层左拐胡同101</Text>
                         </View>
                         <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                           <Text style={{flex: 1, paddingLeft: 10}}>辅导科目：</Text>
                           <Text style={{flex: 1, paddingLeft: 10}}>人工智能AlphaMao</Text>
                         </View>
                         <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical: 10, width: screenWidth}}>
                           <Text style={{flex: 1, paddingLeft: 10}}>时间安排：</Text>
                           <Text style={{flex: 1, paddingLeft: 10}}>每周7次 | 每次2小时</Text>
                         </View>
                      </View>

                      <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                       <Text>学员情况描述：</Text>
                       <Text>风流倜傥，玉树临风的当代泽铭兄台...对不起，走错教室了</Text>
                      </View>

                      <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                       <Text>具体要求：</Text>
                       <Text>风流倜傥，玉树临风的当代泽铭兄台...对不起，走错教室了</Text>
                      </View>

                      <View style={{width: screenWidth, borderBottomWidth: 10, borderBottomColor: 'rgb(237,237,237)'}}>
                        <Text>学费接受范围</Text>
                         <Text>1~200</Text>
                      </View>


                      <View style={{width: screenWidth, paddingHorizontal: 10}}>
                       <Text>时间安排：</Text>
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
   export default JiaZhangDetailScene;
