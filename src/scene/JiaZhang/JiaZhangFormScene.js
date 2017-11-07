/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T17:38:19+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: JiazhangScene.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-07T09:30:09+08:00
 */

  //import liraries
  import React, { PureComponent } from 'react'
  import { View, Text, StyleSheet, Checkbox, Alert, ScrollView } from 'react-native'
  import { Dropdown } from 'react-native-material-dropdown';
  import { TextField } from 'react-native-material-textfield';
  import CheckBox from '../JiaJiao/CheckBox';
  import Collapsible from 'react-native-collapsible';
  import { RaisedTextButton } from '../../widget/react-native-material-buttons';
  import Button  from '../../widget/Button2';

  // create a component
  class JiaZhangFormScene extends PureComponent {

      static navigationOptions = ({ navigation }) => ({
          title: '家长填写需求',
          headerStyle: { backgroundColor: '#00e4c9' }
      })

      state = {
         phone: '',
         isChecked: false,
         isRadioSelected: true,
         isCollapse: true,
         collapsePreferedTeacher: true,
         collapseAcceptiblePriceRange: true
       };

      constructor(props: Object) {
          super(props)
          this.handlePressCheckedBox = this.handlePressCheckedBox.bind(this)
          this.handleSelectedRadionButton = this.handleSelectedRadionButton.bind(this)
          this.kagaku_selected = this.kagaku_selected.bind(this)
          this._collapsePreferedTeacher = this._collapsePreferedTeacher.bind(this)
          this._collapseAcceptiblePriceRange = this._collapseAcceptiblePriceRange.bind(this)
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
      _collapsePreferedTeacher(){
        this.setState({
          collapsePreferedTeacher: !this.state.collapsePreferedTeacher
        })
      }
      _collapseAcceptiblePriceRange(){
        this.setState({
          collapseAcceptiblePriceRange: !this.state.collapseAcceptiblePriceRange
        })
      }
      kagaku_selected(index) {
        Alert.alert(index)
        return index;
      }
      render() {
        let { phone } = this.state;
         let grades = [{
            value: '幼儿',
          }, {
            value: '小学一年级',
          }, {
            value: '高中二年级',
          }, {
            value: '大学一年级',
          }]
          let district = [{
             value: '栖霞区',
           }, {
             value: '玄武区',
           }, {
             value: '白下区',
           }]
            let college = [{
               value: '南师大',
             }, {
               value: '南大',
             }, {
               value: '晓庄师范',
             }]
             let preferedTeacher = ['女老师', '男老师', '大学生老师', '在职教师']
             let acceptiblePriceRange = ['50~100', '100~150', '150~200', '200以上']


          return (
              <ScrollView style={styles.container}>
              <TextField
                label='联系人姓名'
                value={phone}
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              <TextField
                label='联系电话'
                value={phone}
                onChangeText={ (phone) => this.setState({ phone }) }
              />
              <Dropdown
                 containerStyle={{flex:1}}
                 label='所在城区'
                 data={district}
               />
              <Text>学员性别</Text>
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

                <Dropdown
                   containerStyle={{flex:1}}
                   label='学员年级'
                   itemCount={3}
                   data={grades}
                 />
                 <TextField
                   label='在读学校'
                   value={phone}
                   onChangeText={ (phone) => this.setState({ phone }) }
                 />
                 <TextField
                   label='上课时间要求'
                   value={phone}
                   onChangeText={ (phone) => this.setState({ phone }) }
                 />
                 <TextField
                   label='需要辅导科目'
                   value={phone}
                   onChangeText={ (phone) => this.setState({ phone }) }
                 />
                 <TextField
                   label='学员情况描述'
                   value={phone}
                   onChangeText={ (phone) => this.setState({ phone }) }
                 />

               <RaisedTextButton onPress={this._collapsePreferedTeacher} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='希望老师类型'   color='#039BE5' titleColor='white' />
               <Collapsible collapsed={this.state.collapsePreferedTeacher}>
                 <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                   {
                     preferedTeacher.map((title, index) =>
                         <Button style={{flex: 1, minWidth: 100, }} onPress={this.kagaku_selected.bind(this, index.toString())} key={index}>
                           <Text>{title}</Text>
                         </Button>
                     )
                   }
                 </View>
               </Collapsible>
               <RaisedTextButton onPress={this._collapseAcceptiblePriceRange} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='接受费用范围（元/小时）'   color='#039BE5' titleColor='white' />
               <Collapsible collapsed={this.state.collapseAcceptiblePriceRange}>
                 <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                   {
                     acceptiblePriceRange.map((title, index) =>
                         <Button style={{flex: 1, minWidth: 100, }} onPress={this.kagaku_selected.bind(this, index.toString())} key={index}>
                           <Text>{title}</Text>
                         </Button>
                     )
                   }
                 </View>
               </Collapsible>
               <TextField
                 label='对老师的其他要求'
                 multiline={true}
                 value={phone}
                 onChangeText={ (phone) => this.setState({ phone }) }
               />
              <RaisedTextButton onPress={this.showContent} style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='提交'   color='#039BE5' titleColor='white' />
              <View style={{height: 100}}>
                <Text>您的申请将会成为最新申请记录，老师看到了会申请预约，您可以在XX找到老师的申请情况，您可以自主挑选喜欢的老师。</Text>
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
  export default JiaZhangFormScene;
