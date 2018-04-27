import React, { Component } from 'react'
import { View, Text } from 'react-native'
import CartItem from '../components/CartItem'

class Cart extends Component {
    static navigationOptions = {
        title: '购物车',
    };
    render() {
        return (
            <CartItem />
        )
    }
}

export default Cart;