import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Cart extends Component {
    static navigationOptions = {
        title: '购物车',
    };
    render() {
        return (
            <View>
                <Text>Cart</Text>
            </View>
        )
    }
}

export default Cart;