import axios from 'axios';
import gaode from '../config/gaode'

//根据高德地图api获取城市信息
export const searchCityApi = ({location,radius = 1000, extensions = 'all', batch = false, roadlevel = 0})=>axios.get(`${gaode.apiSearchCity}?key=${gaode.key}&location=${location}&radius=${radius}&extensions=${extensions}&batch=${batch}&roadlevel=${roadlevel}`)


//根据经纬度获取周边信息
export const getAroundInfoByLocationApi = ({location,keywords="美食",offset=20,page=1}) => axios.get(`${gaode.apiSearchAround}?key=${gaode.key}&location=${location}&keywords=${keywords}&offset=${offset}&page=${page}&extensions=all`)