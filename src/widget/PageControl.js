/**
 * @Author: MichaelChen <mymac>
 * @Date:   2017-09-27T21:44:42+08:00
 * @Email:  teacherincafe@163.com
 * @Project: one_server
 * @Filename: PageControl.js
 * @Last modified by:   mymac
 * @Last modified time: 2017-11-06T08:45:27+08:00
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import assign from 'object-assign';

class PageControl extends PureComponent {

    static propTypes = {
        numberOfPages: PropTypes.number.isRequired,
        currentPage: PropTypes.number,
        hidesForSinglePage: PropTypes.bool,
        pageIndicatorTintColor: PropTypes.string,
        currentPageIndicatorTintColor: PropTypes.string,
        indicatorSize: PropTypes.object,
        indicatorStyle: View.propTypes.style,
        currentIndicatorStyle: View.propTypes.style,
        onPageIndicatorPress: PropTypes.func
    }

    static defaultProps = {
        numberOfPages: 0,
        currentPage: 0,
        hidesForSinglePage: false,
        pageIndicatorTintColor: 'gray',
        currentPageIndicatorTintColor: 'white',
        indicatorSize: { width: 8, height: 8 },
        indicatorStyle: {},
        currentIndicatorStyle: {},
        onPageIndicatorPress: function () { }
    }

    onPageIndicatorPress(index: number) {
        this.props.onPageIndicatorPress(index);
    }

    render() {
        var { style, ...props } = this.props;

        var defaultStyle = {
            height: this.props.indicatorSize.height
        };

        var indicatorItemStyle = {
            width: this.props.indicatorSize.width,
            height: this.props.indicatorSize.height,
            borderRadius: this.props.indicatorSize.height / 2,
            marginLeft: 5,
            marginRight: 5
        };

        var indicatorStyle = assign({}, indicatorItemStyle, this.props.indicatorStyle, {
            backgroundColor: this.props.pageIndicatorTintColor
        });

        var currentIndicatorStyle = assign({}, indicatorItemStyle, this.props.currentIndicatorStyle, {
            backgroundColor: this.props.currentPageIndicatorTintColor
        });

        var pages = [];
        for (var i = 0; i < this.props.numberOfPages; i++) {
            pages.push(i);
        }

        return (
            this.props.hidesForSinglePage && pages.length <= 1 ? null : <View style={[styles.container, defaultStyle, style]}>
                {pages.map((el, i) => <TouchableWithoutFeedback key={i} onPress={this.onPageIndicatorPress.bind(this, i)}>
                    <View style={i == this.props.currentPage ? currentIndicatorStyle : indicatorStyle} />
                </TouchableWithoutFeedback>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default PageControl;
