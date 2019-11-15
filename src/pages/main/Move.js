import React, { Component } from 'react'
import { Text, View,FlatList } from 'react-native'
import {getAroundInfoByLocationApi} from '../../apis/apis'
import StoreItem from '../../components/StoreItem'


export default class Move extends Component {
    state = {
        moveList:[],
        refreshing:false, //控制loading是否展示
        location
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((pos)=> {
            var coords = pos.coords; //坐标对象
            // coords.longitude经度      coords.latitude  纬度
            const location = `${coords.longitude},${coords.latitude}`;
            this.setState({location}); //把location保存到状态
            //发送接口
            /* this.setState({refreshing:true})
            getAroundInfoByLocationApi({location,keywords:'电影院'})
            .then((res) => {
                this.setState({moveList:res.data.pois,refreshing:false})
            })
            .catch((e)=>{
                console.log(e)
                this.setState({refreshing:false});
            }) */

            this.getMoveList(location,'电影院');

        })
    }
 
    getMoveList = (location,keywords) =>{
        this.setState({refreshing:true})
        getAroundInfoByLocationApi({location,keywords})
        .then((res) => {
            this.setState({moveList:res.data.pois,refreshing:false})
        })
        .catch((e)=>{
            console.log(e)
            this.setState({refreshing:false});
        })
    };

    renderItem = ({item}) => {
        return <StoreItem item={item} keyExtractor={(item,index)=>index}/>
    }

    //下拉刷新,每次下拉都会执行该函数
    onRefresh = () =>{
        this.getMoveList(this.state.location,'电影院');
    };
    render() {
        return (
            <View>
               {/*  {
                    this.state.moveList.map((item,key) => {
                        return <StoreItem item={item} key={key}/>
                    })
                } */}
                <FlatList 
                    data={this.state.moveList}    //数据
                    renderItem={this.renderItem}  //根据每条数据，渲染出对应的界面
                    onRefresh={this.onRefresh}    //每次下拉都会执行的函数
                    refreshing={this.state.refreshing}   //控制loading的显示和隐藏
                />   
                
            </View>
        )
    }
}
