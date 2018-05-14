import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Toast,Button } from 'antd-mobile'


class Tabbar extends Component {
    render() {
        return(
            <Wrap>
                <ShopItem onPress={()=>this.props.navigation.navigate('ShopDetail')}>
                    <Img  source={require('../../assets/images/shop.png')} />
                     <Text>店铺</Text>
                </ShopItem>
                <CartItem><Btn>加入购物车</Btn></CartItem>
                <BuyItem><Btn>立刻购买</Btn></BuyItem>
            </Wrap>
        )
    }
}

export default Tabbar

const Wrap = styled(View)`
    display: flex;
    flex-direction: row;
    height: 50px;
`

const Img = styled(Image)`
    height: 24px;
    margin-right: 4px;
`

const ShopItem = styled(TouchableOpacity)`
    width: 26%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
`
const CartItem = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background: #00B6EC;
`
const BuyItem = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background: #FFBD3F;
`

const Btn = styled(Text)`
    color: #fff;
    font-size: 16px;
`