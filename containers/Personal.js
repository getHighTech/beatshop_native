import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Personal extends Component {
    static navigationOptions = {
        title: '个人中心',
    };
    render() {
        return (
            <View>
                <Text>Personal</Text>
            </View>
        )
    }
}

export default Personal;