/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import {Heading2} from '../../widget/Text'
import { screen, system, tool } from '../../common'

// create a component
class OrderMenuItem extends PureComponent {
    render() {
        return (
            <TouchableOpacity style={[styles.container, this.props.style]}
                onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
                <Heading2>
                    {this.props.title}
                </Heading2>
            </TouchableOpacity>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 4,
        height: screen.width / 5,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    }
});

//make this component available to the app
export default OrderMenuItem;
