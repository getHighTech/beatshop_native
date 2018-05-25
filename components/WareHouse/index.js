import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, Image } from 'react-native' 
import { Button, Modal } from 'antd-mobile'
const alert = Modal.alert;
class WareHouse extends Component {
    _Confirm = () => {
        alert('确定代理这件商品?', '详情介绍', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => console.log('ok') },
          ])
    }
    render() {
        return (
            <Wrap>
                <CardWrap>
                    <Img source={require('../../assets/images/b1.png')} />
                    <GoodWrap>
                        <Title>万人车汇</Title>
                        <InfoWrap>
                            <Info>价: ￥356.11</Info>
                            <Info>佣: ￥356.11</Info>
                        </InfoWrap>
                        <ReButton type="warning" size="small" onClick={() => this._Confirm()}>加入</ReButton>
                    </GoodWrap>
                </CardWrap>
                <CardWrap>
                    <Img source={require('../../assets/images/b1.png')} />
                    <GoodWrap>
                        <Title>万人车汇</Title>
                        <InfoWrap>
                            <Info>价: ￥356.11</Info>
                            <Info>佣: ￥356.11</Info>
                        </InfoWrap>
                        <ReButton type="warning" size="small" onClick={() => this._Confirm()}>加入</ReButton>
                    </GoodWrap>
                </CardWrap>
            </Wrap>
        )
    }

}
export default WareHouse;

const Wrap = styled(View)`
`

const CardWrap = styled(View)`
    display: flex;
    width: 98%;
    border-width: 1;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 2;
    elevation: 1;
    margin: 4px auto;
`

const Img = styled(Image)`
    width: 100%;
    height: 160px;
    border-radius: 5;
`

const GoodWrap = styled(View)`
    margin-top: -70px;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.4);
    padding: 10px;
`

const Title= styled(Text)`
    color: #fff;
    font-size: 20px;
`
const InfoWrap = styled(View)`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
`
const Info = styled(Text)`
    color: #fff;
`

const ReButton = styled(Button)`
    width: 80px;
    height: 30px;
    margin-top: -30px;
    margin-left: 260px;
`



