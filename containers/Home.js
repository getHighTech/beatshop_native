import React, { Component } from 'react'
import { View, Text } from 'react-native'
import HomeItem from '../components/HomeItem'

class Home extends Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        return (
                <HomeItem />
        )
    }
}

export default Home;