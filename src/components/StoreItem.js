import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import PropTypes from 'prop-types'

/* 
  店铺组件
*/

export default class StoreItem extends Component {
    static propTypes = {
        item:PropTypes.object,

    }
    static defaultProps = {
        item:{},
    }
    render() {
        const {item} = this.props;
        return (<View style={{flexDirection:'row',backgroundColor:'#fff',marginBottom:5}}>
        <Image style={{width:100,height:100}} source={{uri:item.photos[0]?item.photos[0].url:'mrfish'}}/>
        <View style={{flex:1,padding:5}}>
            <View><Text>{item.name}</Text></View>
            <View><Text>{item.biz_ext.rating}分</Text></View>
            <View><Text>{item.type}</Text></View>
            <View><Text>{item.biz_ext.cost}￥</Text></View>
        </View>
    </View>)
    }
}
