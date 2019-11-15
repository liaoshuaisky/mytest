import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
/* import axios from 'axios'
import gaode from '../../../../config/gaode' */
import {searchCityApi} from '../../../../apis/apis'


export default class Header extends Component {
    state = {
        city: '定位中...'
    }
    componentDidMount() {
        //通过全局对象navigator,获取手机位置所在的经纬度
        navigator.geolocation.getCurrentPosition((pos) => {
            var coords = pos.coords; //坐标对象
            const location = `${coords.longitude},${coords.latitude}`;
            /* const url = `http://restapi.amap.com/v3/geocode/regeo?key=41def77e45561b20651038896799825d&location=${location}&radius=1000&extensions=all&batch=false&roadlevel=0`;
            axios.get(url)
                .then((res) => {
                    const city = res.data.regeocode.addressComponent.city;
                    this.setState({ city });
                    console.log(res)
                })
                .catch((e) => {
                    console.log(e)
                })
            console.log(coords);
            // coords.longitude经度      coords.latitude  纬度 */
            // this.getCityByLocation({api:gaode.apiSearchCity,key:gaode.key,location});
            this.getCityByLocation(location);
        })
    }

    //通过经纬度获取城市名称的函数
    getCityByLocation = (location) => {
            searchCityApi({location})
            .then((res) => {
                const city = res.data.regeocode.addressComponent.city;
                this.setState({ city });
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }


    render() {
        const { city } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.cityWrapper}><Text style={styles.city}>{city} ▼</Text></View>
                <View style={styles.searchWrapper}>
                    <FontAwesome name="search" size={18} color="#ccc" />
                    <Text style={styles.searchText}>输入商品名，地点</Text>
                </View>
                <View style={styles.userWrapper}>
                    <FontAwesome name="user-circle-o" size={18} color="#fff" />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    cityWrapper: {
        width: 80,
        alignItems: 'center'
    },
    city: {
        color: '#fff'
    },
    searchWrapper: {
        flexDirection: 'row',
        flex: 1,
        height: 40,
        alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    searchText: {
        marginLeft: 10
    },
    userWrapper: {
        width: 50,
        alignItems: 'center'
    }

});