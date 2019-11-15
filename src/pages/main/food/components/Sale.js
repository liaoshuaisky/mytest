import React, { Component } from 'react'
import { Text, View,Image,Dimensions } from 'react-native'
import disCountData from '../../../../config/disCount'

const {width,height} = Dimensions.get('window');
export default class Sale extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#fff',marginTop:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                    <Text style={{fontSize:20,color:'red'}}>超值特惠</Text>
                    <Text>更多特惠</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    {
                        disCountData.map((item,key)=>{
                            return (<View key={key} style={{backgroundColor:'#fff'}}>
                            <Image source={{uri:item.pic}} style={{width:width/3-6,height:100}}/>
                            <View style={{flexDirection:'row',alignItems:'baseline'}}>
                                <Text style={{color:'red',fontSize:18}}>￥{item.vipPrice}</Text>
                                <Text style={{fontSize:14,textDecorationLine:'line-through'}}>￥{item.salePrice}</Text>
                            </View>
                        </View>)
                        })
                    }
                    
                    {/* <View style={{backgroundColor:'#fff'}}>
                        <Image source={{uri:'mrfish'}} style={{width:width/3-6,height:100}}/>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{color:'red',fontSize:18}}>￥388</Text>
                            <Text style={{fontSize:14,textDecorationLine:'line-through'}}>￥699</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#fff'}}>
                        <Image source={{uri:'mrfish'}} style={{width:width/3-6,height:100}}/>
                        <View style={{flexDirection:'row',alignItems:'baseline'}}>
                            <Text style={{color:'red',fontSize:18}}>￥388</Text>
                            <Text style={{fontSize:14,textDecorationLine:'line-through'}}>￥699</Text>
                        </View>
                    </View> */}
                </View>

            </View>
        )
    }
}
