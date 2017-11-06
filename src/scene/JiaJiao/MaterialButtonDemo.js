/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-11-06T15:10:00+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: MaterialButtonDemo.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T15:41:36+08:00
 */

  //import liraries
  import React, { PureComponent } from 'react'
  import { View, Text, StyleSheet, Checkbox, ScrollView} from 'react-native'
  import { Dropdown } from 'react-native-material-dropdown';
  import { TextField } from 'react-native-material-textfield';
  import CheckBox from './CheckBox';
  import { TextButton, RaisedTextButton } from '../../widget/react-native-material-buttons';

  /* eslint-disable react/prop-types */
  let Strong = ({ children, ...props }) =>
    <Text style={styles.bold} {...props}>{children}</Text>
  /* eslint-enable */

  // create a component
  class JiajiaoFormScene extends PureComponent {

      static navigationOptions = ({ navigation }) => ({
          title: '老师注册',
          headerStyle: { backgroundColor: 'white' },
      })

      state = {
         phone: '',
         isChecked: false,
         isRadioSelected: true,
       };

      constructor(props: Object) {
          super(props)
          this.handlePressCheckedBox = this.handlePressCheckedBox.bind(this)
          this.handleSelectedRadionButton = this.handleSelectedRadionButton.bind(this)
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

      render() {
        let { phone } = this.state;
        let data = [{
           value: 'Banana',
         }, {
           value: 'Mango',
         }, {
           value: 'Pear',
         }];
          return (
              <View style={styles.container}>
               <Text>jiajiao form</Text>
               <Dropdown
                  label='Favorite Fruit'
                  data={data}
                />
                <TextField
                  label='Phone number'
                  value={phone}
                  onChangeText={ (phone) => this.setState({ phone }) }
                />
                <View style={{ flex: 1, padding: 20 }}>
                 <CheckBox
                   label="Checkbox"
                   size={30}
                   checked={this.state.isChecked}
                   onPress={this.handlePressCheckedBox}
                 />
                 {/* You can use other Icon */}
                 {/* Here is the example of Radio Icon */}
                 <CheckBox
                   label="RadioButton"
                   size={30}
                   checked={this.state.isRadioSelected}
                   onPress={this.handleSelectedRadionButton}
                   uncheckedIconName="radio-button-unchecked"
                   checkedIconName="radio-button-checked"
                 />
               </View>
               <ScrollView style={styles.scroll}>
                 <View style={styles.card}>
                   <View style={styles.content}>
                     <Text style={styles.display}>default</Text>
                     <Text style={styles.text}>Buttons with default props, raised or flat, enabled or <Strong>disabled</Strong></Text>
                   </View>

                   <RaisedTextButton style={{ marginVertical: 4 }} title="default button" />
                   <RaisedTextButton style={{ marginVertical: 4 }} title="disabled button" disabled />
                   <TextButton style={{ marginVertical: 4 }} title="default flat button" />
                   <TextButton style={{ marginVertical: 4 }} title="disabled flat button" disabled />
                 </View>

                 <View style={styles.card}>
                   <View style={styles.content}>
                     <Text style={styles.display}>raised</Text>
                     <Text style={styles.text}>Buttons with custom <Strong>color</Strong>, <Strong>titleColor</Strong>, increased <Strong>rippleDuration</Strong> and <Strong>rippleOpacity</Strong></Text>
                   </View>

                   <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                     <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='flat'   color='#039BE5' titleColor='white' />
                     <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='is'     color='#0288D1' titleColor='white' />
                     <RaisedTextButton style={styles.button} rippleDuration={600} rippleOpacity={0.54} title='boring' color='#0277BD' titleColor='white' />
                   </View>
                 </View>

                 <View style={styles.card}>
                   <View style={styles.content}>
                     <Text style={styles.display}>flat</Text>
                     <Text style={styles.text}>Buttons with custom <Strong>titleColor</Strong> and <Strong>color</Strong></Text>
                   </View>

                   <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                     <TextButton style={{ margin: 4, marginLeft: 0 }} titleColor='#00796B' title='decline' />
                     <TextButton style={{ margin: 4 }} titleColor='#00695C' color='rgba(0, 0, 0, .05)' title='accept' />
                   </View>
                 </View>
               </ScrollView>
              </View>
          );
      }

  }

  // define your styles
  const styles = StyleSheet.create({
      container: {
          backgroundColor: 'white',
          flex: 0.5,
          padding: 10
      },
      scroll: {
       padding: 4,
       paddingTop: 24,
       backgroundColor: '#E8EAF6',
     },


       column: {
         justifyContent: 'center',
         marginBottom: 8,
         backgroundColor: 'rgba(0,0,0,.05)',
       },

       row: {
         marginBottom: 8,
       },

       card: {
         borderRadius: 2,
         padding: 8,
         margin: 4,
         backgroundColor: 'rgba(255, 255, 255, 1)',
         minHeight: 76,
         justifyContent: 'space-between',
         shadowOpacity: 0.54,
         shadowRadius: 1,
         shadowOffset: { width: 0, height: 1 },
         elevation: 1,
       },

       button: {
         margin: 4,
       },

       display: {
         paddingHorizontal: 8,
         fontSize: 17,
         fontWeight: '500',
         color: 'rgba(0, 0, 0, .87)',
       },

       text: {
         padding: 8,
         fontSize: 15,
         color: 'rgba(0, 0, 0, .54)',
       },

       content: {
         flex: 1,
         paddingVertical: 16,
       },

       bold: {
         fontWeight: 'bold',
       }
  });

 // 后面可以在背景加blur效果，https://github.com/react-native-community/react-native-blur
  // how to add background image
  // https://medium.com/reactnative/background-images-in-react-native-191f3ed95a45
  // <View
  //   style={{
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     width: '100%',
  //     height: '100%',
  //   }}>
  //   <Image
  //     style={{
  //       flex: 1,
  //     }}
  //     source={{ uri: 'https://kylewbanks.com/images/post/react-native-fullscreen-image-1.png' }}
  //   />
  // </View>

  //make this component available to the app
  export default JiajiaoFormScene;
