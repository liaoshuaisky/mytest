import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
// import gaode from '../../../../config/gaode'
// import axios from 'axios'
import StoreItem from '../../../../components/StoreItem';
import {getAroundInfoByLocationApi} from '../../../../apis/apis'

/* 
  思路：
    页面一进来的时候，就要根据获取的位置的经纬度，获取周边美食

    如果切换了城市，那么就要把切换后的城市的经纬度获取到，然后根据这个经纬度更新周边美食

*/

export default class GuestYouLike extends Component {
    state = {
        guessYouLikeList:[],
    }
    componentDidMount(){
        navigator.geolocation.getCurrentPosition((pos)=> {
            var coords = pos.coords; //坐标对象
            // coords.longitude经度      coords.latitude  纬度
            const location = `${coords.longitude},${coords.latitude}`;
            /* const url = `${gaode.apiSearchAround}?key=${gaode.key}&location=${location}&keywords=美食&offset=20&page=1&extensions=all`;
            axios.get(url)
            .then((res)=>{
                console.log('周边美食',res)
                this.setState({guessYouLikeList:res.data.pois})
            })
            .catch((e)=>{
                console.log(e)
            }) */
            getAroundInfoByLocationApi({location})
            .then((res) => {
                this.setState({guessYouLikeList:res.data.pois})
            })
            .catch((e)=>{
                console.log(e)
            })

        })
    }
    render() {
        const {guessYouLikeList} = this.state;
        return (
            <View>
            {
                guessYouLikeList.map((item,key) => {
                    return (
                    <StoreItem item={item} key={key}/>
                    )
                })
            }
            
        </View>
        )
    }
}
