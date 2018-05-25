import React, { Component } from 'react'
import styled from 'styled-components'
import { SwipeAction, List, Checkbox, Stepper } from 'antd-mobile'
import { View, Text, Image, ScrollView  } from 'react-native'
import CartTabbar from '../CartItem/cartTabbar'
const CheckboxItem = Checkbox.CheckboxItem;
class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 3,
            val1: 2,
        };
    }

    onChange = (val) => {
        this.setState({ val });
    }
    render() {
        return (
                <CartWrap>
                    <Content>
                        <List>
                            <CheckboxItem>优酷官方旗舰店</CheckboxItem>
                        </List>
                        <GoodItem>
                            <SwipeAction
                                right={[
                                    {
                                        text: '删除',
                                        onPress: () => console.log('delete'),
                                        style: { backgroundColor: '#F4333C', color: 'white' },
                                    },
                                ]}
                            >
                                <ListWrap >
                                    <CheckWrap>
                                        <Img source={{uri: 'https://i1.mifile.cn/a1/pms_1520477459.57598365!180x1800.jpg'}} />
                                    </CheckWrap>
                                    <GoodWrap>
                                        <Text>红米5A 3GB+32GB</Text>
                                        <Price>
                                            ￥699
                                        </Price>
                                        <StepperWrap
                                            showNumber
                                            max={10}
                                            min={1}
                                            value={this.state.val}
                                            onChange={this.onChange}
                                        />
                                    </GoodWrap>
                                </ListWrap>
                            </SwipeAction>
                        </GoodItem>
                    </Content>
                    <CartTabbar />
                </CartWrap>
        )
    }
}

export default CartItem


const CartWrap = styled.View`
    height: 100%;
`
const Content = styled(ScrollView)`
    flex-grow: 1
`
const ListWrap = styled(List) `
    width: 100%;

`
const Img = styled.Image`
    height: 100px;
    width: 100px;
 
`
const CheckWrap = styled(CheckboxItem) `

`
const GoodWrap = styled.View`
    position: absolute;
    top: 10px;
    left: 150px;
`



const Price = styled.Text`
    color: red;
    margin-top: 20px;
`


const StepperWrap = styled(Stepper) `
    position: absolute;
    top: 40px;
    right: -60px;
`
const GoodItem = styled.View`
`
