import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import Welcome from './src/pages/Welcome'
import Main from './src/pages/main/Main'                               


// 配置路由
const Nav = createSwitchNavigator({
  //key(路由名称):value（该路由的具体配置）
  //欢迎页面路由
  //主页
  // Welcome:{
  //   screen:Welcome  //该路由所要渲染的组件
  // },
  Main:{
    screen:Main
  }
   
})

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Nav/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
  
});
