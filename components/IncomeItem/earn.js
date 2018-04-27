import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, Image, ScrollView } from 'react-native'

class Earn extends Component {
    render() {
        return (
            <Wrap>
                <TitleWrap>
                    <Img source={require('../../assets/images/income.png')} />
                    <Title>
                        收益
                </Title>
                </TitleWrap>
                <ItemWrap>
                    <ItemTop>
                        <Item>今日</Item>
                        <Item>一周</Item>
                        <Item>30天</Item>
                    </ItemTop>
                    <ItemBottom>
                        <ItemNumber>38.88</ItemNumber>
                        <ItemNumber>150.05</ItemNumber>
                        <ItemNumber>388.80</ItemNumber>
                    </ItemBottom>
                </ItemWrap>

            </Wrap>
        )

    }
}

export default Earn;


export const Wrap = styled.View`
    width: 94%;
    margin: 20px auto 0 auto;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 5px 0 15px 0;
`

export const TitleWrap = styled.View`
    display: flex;
    flex-direction: row;
    width: 94%;
    margin: 10px auto ;
`
export const Img = styled.Image`
    width: 20px;
    height: 20px;
`

export const Title = styled.Text`
    margin-left: 10px;
`

const ItemWrap = styled.View`
    width: 96%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    borderWidth: 1;
    border-color:  #00B6EC;
`

const ItemTop = styled.View`
    display: flex;
    flex-direction: row;
    background: #00B6EC;
    padding: 5px 0;
`
const ItemBottom = styled.View`
    display: flex;
    padding: 5px 0;
    flex-direction: row;
`

const Item = styled.Text`
    flex-grow: 1;
    text-align: center;
    color: #fff;
`
const ItemNumber = styled.Text`
    flex-grow: 1;
    text-align: center;
`