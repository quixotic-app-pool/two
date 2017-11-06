/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: NearbyHeaderView.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T09:47:00+08:00
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color } from '../../widget'
import DropdownMenu from '../../../dropdown';

// create a component
class NearbyHeaderView extends PureComponent {
    static defaultProps = {
        onSelected: () => { }
    }
    render() {
      var data = [["C", "Java", "JavaScript"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
        return (
            <View>
              <View style={styles.container}>
                  {this.props.titles.map((title, i) => (
                      <TouchableOpacity
                          style={[{ backgroundColor: this.props.selectedIndex == i ? '#FE566D' : 'white' }, styles.item]}
                          key={i}
                          onPress={() => this.props.onSelected(i)}>
                          <Paragraph
                              style={{ color: this.props.selectedIndex == i ? 'white' : '#555555' }}>
                              {this.props.titles[i]}
                          </Paragraph>
                      </TouchableOpacity>
                  ))}
              </View>
              <View style={{flex: 1}} >
               <DropdownMenu style={{flex: 1}}
                 arrowImg={require('../../../img/dropdown_arrow.png')}      //set the arrow icon, default is a triangle
                 checkImage={require('../../../img/menu_check.png')}    //set the icon of the selected item, default is a check mark
                 bgColor={"red"}                            //the background color of the head, default is grey
                 tintColor={"white"}                        //the text color of the head, default is white
                 selectItemColor={"red"}                    //the text color of the selected item, default is red
                 data={data}
                 maxHeight={410}                            // the max height of the menu
                 handler={(selection, row) => alert(data[selection][row])} >

                 <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
                   <Text>
                     Your own view Here
                   </Text>
                 </View>

               </DropdownMenu>
             </View>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: screen.onePixel,
        borderColor: color.border,
    },
});

//make this component available to the app
export default NearbyHeaderView;
