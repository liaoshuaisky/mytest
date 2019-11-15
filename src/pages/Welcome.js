import React, { Component } from 'react'
import { Text, View,Image, Dimensions } from 'react-native'
const {width,height} = Dimensions.get('window');

export default class Welcome extends Component {
    componentDidMount(){
        // console.log(this.props);
        setTimeout(() => {
            //跳转到主页
            this.props.navigation.navigate('Main');

        },500)
    }
    render() {
        return (
            <View>
                <Image style={{width,height}} source={{uri:'launcher_image'}}/>
            </View>
        )
    }
}


