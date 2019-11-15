import React, { Component } from 'react'
import { Text, View,Dimensions } from 'react-native'
import {createBottomTabNavigator} from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Food from './food/Food'
import Move from './Move'
import Hotel from './Hotel'
import Bank from './Bank'

const BottomTab = createBottomTabNavigator({
    //key(路由名称):value（该路由的具体配置）
    Food:{
        screen:Food,   //该路由所要渲染的组件
        navigationOptions:{
            tabBarLabel:'美食',
            tabBarIcon:({tintColor}) => {  //tintColor是图标的颜色
                return <MaterialCommunityIcons name='food' size={30} color={tintColor}/>
            }
        }
    },
    Move:{
        screen:Move,
        navigationOptions:{
            tabBarLabel:'电影院',
            tabBarIcon:({tintColor}) => {  //tintColor是图标的颜色
                return <FontAwesome name='file-movie-o' size={30} color={tintColor}/>
            }
        }  
    },
    Hotel:{
        screen:Hotel,
        navigationOptions:{
            tabBarLabel:'旅馆',
            tabBarIcon:({tintColor}) => {  //tintColor是图标的颜色
                return <FontAwesome5 name='hotel' size={30} color={tintColor}/>
            }
        }  
    },
    Bank:{
        screen:Bank,
        navigationOptions:{
            tabBarLabel:'银行',
            tabBarIcon:({tintColor}) => {  //tintColor是图标的颜色
                return <FontAwesome5 name='piggy-bank' size={30} color={tintColor}/>
            }
        }   
    }
},{
    tabBarOptions:{
        activeTintColor:'red',  //配置选中后的图标文本的颜色
        activeBackgroundColor:'#f2f2f2'
    }
});
const {width,height} = Dimensions.get('window');
export default class Main extends Component {
    render() {
        return (
            <View style={{width,flex:1}}>
               <BottomTab/>
            </View>
        )
    }
}
