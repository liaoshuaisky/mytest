import React, { Component } from 'react'
import { Text, View , ScrollView,Dimensions} from 'react-native'
import SubMenuItem from '../../../../components/SubMenuItem'
import SubMenuData from '../../../../config/FeatureData'

const {width} = Dimensions.get('window'); 
export default class SubMenu extends Component {
    state = {
        curPage:0  //当前页数
    }
    scrollEnd = (e) => {
        const distance = e.nativeEvent.contentOffset.x;  //获取滚动距离
        const curPage = Math.floor(distance/width);  //计算当前的页数
        this.setState({curPage})
    }
    render() {
        return (
            <View style={{backgroundColor:'#fff'}}>
                <ScrollView horizontal  //滚动方向设置为水平方向
                showsHorizontalScrollIndicator={false}  //隐藏横向滚动条
                pagingEnabled={true} //每次滚动的距离是宽度的整数倍
                onMomentumScrollEnd={this.scrollEnd} //滚动动画结束时调用此函数，通过该函数可以获取滚动的距离
                style={{height:160,backgroundColor:'#FFF'}}>

                        { 
                          SubMenuData.map((item,key)=>{
                              return <View key={key} style={{height:160,width,flexDirection:'row',flexWrap:'wrap'}}>
                                {
                                    item.map((iconItem,k) => {
                                        return <SubMenuItem key={k} uri={iconItem.image} title={iconItem.title}/>
                                    })
                                }
                              </View>
                          })

                        }
                      {/* <View style={{height:160,width,flexDirection:'row',flexWrap:'wrap'}}>
                            <SubMenuItem/>
                            <SubMenuItem/>
                            <SubMenuItem/>
                            <SubMenuItem/>
                            <SubMenuItem/>    
                      </View>
                      <View style={{height:160,width}}><Text>22222</Text></View>  */} 
                </ScrollView>
                <View style={{flexDirection:'row',justifyContent:'center',paddingTop:10,paddingBottom:10}}>
                     {
                         SubMenuData.map((item,key)=>{
                            return <View key={key} style={{width:8,height:8,borderRadius:4,backgroundColor:this.state.curPage===key?'red':'#ccc',margin:2}}></View>
                         })
                     }
                    
                    {/* <View style={{width:8,height:8,borderRadius:4,backgroundColor:'#ccc',margin:2}}></View> */}
                </View>
            </View>
        )
    }
}
