import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import Header from './components/Header'
import SubMenu from './components/SubMenu'
import Sale from './components/Sale'
import GuestYouLike from './components/GuestYouLike'

export default class Food extends Component {
    render() {
        return (
            <ScrollView>
                <Header/>
                <SubMenu/>
                <Sale/>
                <GuestYouLike/>
               
            </ScrollView>
        )
    }
}
