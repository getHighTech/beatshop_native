import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Button, Checkbox, List } from 'antd-mobile'
const CheckboxItem = Checkbox.CheckboxItem;


class CartTabbar extends Component {
    render() {
        return(
            <Wrap>
                <ShopItem>
                        <Checkbox>全选</Checkbox>
                </ShopItem>
                <CartItem><Btn>合计</Btn><Price>￥0.00</Price></CartItem>
                <BuyItem><YBtn>结算</YBtn></BuyItem>
            </Wrap>
        )
    }
}

export default  CartTabbar

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
    background: #fff;
    flex-direction: row;
`
const BuyItem = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    background: #FFBD3F;
`

const Btn = styled(Text)`
    font-size: 16px;
`
const Price = styled(Text)`
    color: red;
    margin-left: 10px;
`

const YBtn = styled(Text)`
    font-size: 16px;
    color: #fff;
`