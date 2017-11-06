/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T09:57:11+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiajiaoFormScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T17:43:59+08:00
 */

 //import liraries
 import React, { PureComponent } from 'react'
 import { View, Text, StyleSheet, Checkbox, Alert, ScrollView } from 'react-native'
 import { Dropdown } from 'react-native-material-dropdown';
 import { TextField } from 'react-native-material-textfield';
 import CheckBox from './CheckBox';
 import Collapsible from 'react-native-collapsible';
 import { RaisedTextButton } from '../../widget/react-native-material-buttons';
 import Button  from '../../widget/Button2';

 // create a component
 class JiaJiaoFormScene extends PureComponent {

     static navigationOptions = ({ navigation }) => ({
         title: '老师注册',
         headerStyle: { backgroundColor: '#00e4c9' }
     })

     state = {
        phone: '',
        isChecked: false,
        isRadioSelected: true,
        isCollapse: true,
        collapseAlavailableKagaku: true,
        collapseAlavailableTime: true,
        collapseAlavailableDistrict: true,
        collapsePriceRange: true
      };

     constructor(props: Object) {
         super(props)
         this.handlePressCheckedBox = this.handlePressCheckedBox.bind(this)
         this.handleSelectedRadionButton = this.handleSelectedRadionButton.bind(this)
         this.kagaku_selected = this.kagaku_selected.bind(this)
         this._collapseAlavailableKagaku = this._collapseAlavailableKagaku.bind(this)
         this._collapseAlavailableTime = this._collapseAlavailableTime.bind(this)
         this._collapseAlavailableDistrict = this._collapseAlavailableDistrict.bind(this)
         this._collapsePriceRange = this._collapsePriceRange.bind(this)
       }
     handlePressCheckedBox = (checked) => {
        this.setState({
          isChecked: checked,
        });
      }

      handleSelectedRadionButton = (checked) => {
        this.setState({
          isRadioSelected: checked,
        });
      }
     _collapseAlavailableKagaku(){
       this.setState({
         collapseAlavailableKagaku: !this.state.collapseAlavailableKagaku
       })
     }
     _collapseAlavailableTime(){
       this.setState({
         collapseAlavailableTime: !this.state.collapseAlavailableTime
       })
     }
     _collapseAlavailableDistrict(){
       this.setState({
         collapseAlavailableDistrict: !this.state.collapseAlavailableDistrict
       })
     }
     _collapsePriceRange(){
       this.setState({
         collapsePriceRange: !this.state.collapsePriceRange
       })
     }
     kagaku_selected(index) {
       Alert.alert(index)
       return index;
     }
     render() {
       let { phone } = this.state;
       let data = [{
          value: 'Banana',
        }, {
          value: 'Mango',
        }, {
          value: 'Pear',
        }];
        let birth = [{
           value: '2001',
         }, {
           value: '2002',
         }, {
           value: '2003',
         }]
         let district = [{
            value: '栖霞区',
          }, {
            value: '玄武区',
          }, {
            value: '白下区',
          }]
          let position = [{
             value: '本科在读',
           }, {
             value: '硕士在读',
           }, {
             value: '外籍留学生',
           }]
           let college = [{
              value: '南师大',
            }, {
              value: '南大',
            }, {
              value: '晓庄师范',
            }]
            let kagaku = ['小学数学', '初中英语', '高中化学', '小学数学', '初中英语', '高中化学', '小学数学', '初中英语']
            let timeavailable = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            let availabledistrict = ['玄武', '栖霞', '白下', '鼓楼']
            let pricescale = ['50~100', '100~150', '150~200', '200以上']


         return (
             <ScrollView style={styles.container}>
             <TextField
               label='老师用户名'
               value={phone}
               onChangeText={ (phone) => this.setState({ phone }) }
             />
             <TextField
               label='登录密码'
               value={phone}
               onChangeText={ (phone) => this.setState({ phone }) }
             />
             <TextField
               label='老师您的真实姓名'
               value={phone}
               onChangeText={ (phone) => this.setState({ phone }) }
             />
             <Text>性别</Text>
             <View style={{ flex: 1, flexDirection: 'row'}}>
               <CheckBox
                 label="男生"
                 size={30}
                 checked={this.state.isRadioSelected}
                 onPress={this.handleSelectedRadionButton}
                 uncheckedIconName="radio-button-unchecked"
                 checkedIconName="radio-button-checked"
               />
               <CheckBox
                 label="女生"
                 style={{flex:1}}
                 size={30}
                 checked={this.state.isRadioSelected}
                 onPress={this.handleSelectedRadionButton}
                 uncheckedIconName="radio-button-unchecked"
                 checkedIconName="radio-button-checked"
               />
              </View>

             <Text>出生日期</Text>
             <View style={{ flex: 1, flexDirection: 'row'}}>
               <Dropdown
                  containerStyle={{flex:1}}
                  label='年'
                  data={birth}
                />
                <Dropdown
                   containerStyle={{flex:1}}
                   label='月'
                   data={birth}
                 />
                 <Dropdown
                    containerStyle={{flex:1}}
                    label='日'
                    data={birth}
                  />
              </View>
              <TextField
                label='18位身份证号码'
                value={phone}
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              <Dropdown
                 containerStyle={{flex:1}}
                 label='所在城区'
                 data={district}
               />
               <Dropdown
                  containerStyle={{flex:1}}
                  label='目前身份'
                  data={position}
                />
                <Dropdown
                   containerStyle={{flex:1}}
                   label='在读/毕业学校'
                   data={college}
                 />

              <RaisedTextButton onPress={this._collapseAlavailableKagaku} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='可教授科目'   color='#039BE5' titleColor='white' />
              <Collapsible collapsed={this.state.collapseAlavailableKagaku}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                  {
                    kagaku.map((title, index) =>
                        <Button style={{flex: 1, minWidth: 100, }} onPress={this.kagaku_selected.bind(this, index.toString())} key={index}>
                          <Text>{title}</Text>
                        </Button>
                    )
                  }
                </View>
              </Collapsible>

              <RaisedTextButton onPress={this._collapseAlavailableTime} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='可授课时间'   color='#039BE5' titleColor='white' />
              <Collapsible collapsed={this.state.collapseAlavailableTime}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                  {
                    timeavailable.map((title, index) =>
                        <Button style={{flex: 1, minWidth: 100, }} onPress={this.kagaku_selected.bind(this, index.toString())} key={index}>
                          <Text>{title}</Text>
                        </Button>
                    )
                  }
                </View>
              </Collapsible>

              <RaisedTextButton onPress={this._collapseAlavailableDistrict} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='可授课城区'   color='#039BE5' titleColor='white' />
              <Collapsible collapsed={this.state.collapseAlavailableDistrict}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                  {
                    availabledistrict.map((title, index) =>
                        <Button style={{flex: 1, minWidth: 100, }} onPress={this.kagaku_selected.bind(this, index.toString())} key={index}>
                          <Text>{title}</Text>
                        </Button>
                    )
                  }
                </View>
              </Collapsible>
              <RaisedTextButton onPress={this._collapsePriceRange} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='收费期许范围'   color='#039BE5' titleColor='white' />
              <Collapsible collapsed={this.state.collapsePriceRange}>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                  {
                    pricescale.map((title, index) =>
                        <Button style={{flex: 1, minWidth: 100, }} onPress={this.kagaku_selected.bind(this, index.toString())} key={index}>
                          <Text>{title}</Text>
                        </Button>
                    )
                  }
                </View>
              </Collapsible>
              <TextField
                label='所获证书'
                value={phone}
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              <RaisedTextButton onPress={this.showContent} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='添加'   color='#039BE5' titleColor='white' />
              <Text>这里添加证书，每次添加则会push到certificateArray里面，以tag形式显示在下方</Text>
              <TextField
                label='自我描述和家教经历'
                value={phone}
                multiline={true}
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              <RaisedTextButton onPress={this.showContent} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='提交'   color='#039BE5' titleColor='white' />
             <View style={{height: 100}}>
             </View>
             </ScrollView>
         );
     }

 }

 // define your styles
 const styles = StyleSheet.create({
     container: {
         padding: 20,
         paddingTop: 24,
         backgroundColor: '#fff'
     }
 });
 //make this component available to the app
 export default JiaJiaoFormScene;
