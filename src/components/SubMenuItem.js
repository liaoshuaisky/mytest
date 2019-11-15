import React, { Component } from 'react'
import { Text, View, Dimensions,Image} from 'react-native'
import PropTypes from 'prop-types';
const {width} = Dimensions.get('window')



export default class SubMenuItem extends Component {
    // 约束默认值的类型
    static propTypes = {
        uri:PropTypes.string,
        title:PropTypes.string
    }
    static defaultProps = {   //设置默认值
        uri:'shfw',
        title:'生活服务'
    }
    render() {
        const {uri,title} = this.props;
        return (
            <View style={{ width: width / 5, alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50 }} source={{ uri }} />
                <Text>{title}</Text>
            </View>
        )
    }
}
