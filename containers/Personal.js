import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PersonalItem from '../components/PeronalItem'

class Personal extends Component {
    static navigationOptions = {
        title: '个人中心',
    };
    render() {
        return (
            <PersonalItem />
        )
    }
}

export default Personal;