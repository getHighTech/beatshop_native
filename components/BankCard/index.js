import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, Image,Button } from 'react-native'

class BankCard extends Component {
    render() {
        return(
            <Wrap>
                    <Card>
                        <TopWrap>
                            <Img source={require('../../assets/images/yxx_bank_card.png')} />
                            <Title>储蓄卡</Title>
                        </TopWrap>
                        <MiddleWrap>
                            <Branch>支行地址:厦门松柏支行</Branch>
                            <CardNumber>565223268689562356</CardNumber>
                        </MiddleWrap>
                        <BottomWrap>
                            <BtnWrap>
                                <Btn>解除绑定</Btn>
                            </BtnWrap>
                        </BottomWrap>
                    </Card>
            </Wrap>
        )
    }
}

export default BankCard

const Wrap = styled(View)`
    width: 94%;
    margin: 0 auto;
`



const Card = styled(View)`
    background: #212121;
    height: 200px;
    border-width: 1;
    border-radius: 10;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 2;
    elevation: 1;
    margin: 5px 0;
    display: flex;
    justify-content: space-around;
`

const TopWrap = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Img = styled(Image)`
    margin-left: 10px;
    height: 40px;
    width: 40px;
`
const Title = styled(Text)`
    margin-left: 5px;
    color: #fff;
`

const Branch = styled(Text)`
    color: #fff;
    font-size: 16;
`

const CardNumber = styled(Text)`
    color: #D0B07D;
    font-size: 26;
    letter-spacing: 2;
    margin: 5px 0 0 0;
`

const MiddleWrap = styled(View)`
    display: flex;
    align-items: center;
    margin-top: -8px;
`

const BottomWrap = styled(View)`
    display: flex;
    align-items: flex-end;
`

const BtnWrap = styled(View)`
    background: #FFD851;
    border-radius: 4;
    margin-right: 20px;
`

const Btn = styled(Text)`
    padding: 10px 10px;
    font-weight: 900;
`