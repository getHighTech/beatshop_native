import React, { Component } from 'react';
import styled from 'styled-components'
import HeaderBg from '../../assets/images/awardbg.png'
import { View, Text, Image, ScrollView } from 'react-native'


class IncomeItem extends Component {
    render() {
        return (
            <Wrap>
                <Header>
                    <Img source={require('../../assets/images/default.png')} />
                    <Title>
                        就不告诉你
                    </Title>
                </Header>
                <Body>
                    <Descrption>
                        "已在万人车汇APP累计获得佣金"
                    </Descrption>
                    <Total>
                        ￥3888
                    </Total>
                </Body>
                <Footer>
                    <Info>
                        (厉害了,你已经超越100%的客户)
                    </Info>
                </Footer>
            </Wrap>
        )
    }
}




export default IncomeItem


const Wrap = styled.View`
    height: 200px;
    display: flex;
    flex-direction: column;
    width: 96%;
    background: black;
    margin: 10px  auto 0 auto;
    border-radius: 5px;
`
const Header = styled.View`
    display: flex;
    flex-direction: row;
    margin: 20px 0 0 26px;
`
const Img = styled.Image`
    width: 36px;
    height: 36px;
`
const Title = styled.Text`
    margin: 5px 0 0 10px;
    color: #fff;
`
const Descrption = styled.Text`
    font-size: 14px;
    color: #fff;
`
const Total = styled.Text`
    font-size: 30px;
    color: #F1C440;
    margin-top: 20px;
`
const Body = styled.View`
    margin: 10px 0 0 0;
    display: flex;
    align-items: center;
`

const Footer = styled.View`
`
const Info = styled.Text`
     text-align: center;
     color: #fff;
     font-size: 12px;
     margin: 24px 0 0 0;
`
