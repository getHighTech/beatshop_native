import React, { Component } from 'react'
import styled from 'styled-components'
import { Button,List,Modal } from 'antd-mobile'
import { View,Text, Image, ScrollView } from 'react-native'
const Item = List.Item
const alert = Modal.alert


class PeronalItem extends Component {
    LoginOut = () => {
        alert('登出', '确定登出?', [
            { text: '取消', onPress: () => console.log(`取消了`) },
            { text: '登出', onPress: () => console.log(`登出了`) }
        ])
    }
    render() {
        return(
            <ScrollView>
                <Bg>
                    <Info>
                        <InfoImg source={require('../../assets/images/peronsal.png')} />
                        <InfoName>
                            <TextName>牛BearBear</TextName>
                            <SexImg source={require('../../assets/images/wan_sex_w.png')} />
                        </InfoName>
                        <Intro>
                            我的梦想是,让世界和平
                        </Intro>

                    </Info>
                </Bg>
                <CardWrap>
                    <ContentWrap>
                        <Img source={require('../../assets/images/bwallat.png')} />
                        <Title>我的钱包</Title>
                    </ContentWrap>
                    <ContentWrap>
                        <Img source={require('../../assets/images/card.png')} />
                        <Title>卡包</Title>
                    </ContentWrap>
                    <ContentWrap>
                        <Img source={require('../../assets/images/coupon.png')} />
                        <Title>优惠券</Title>
                    </ContentWrap>
                </CardWrap>
                <Wrap>
                    <List >
                        < ItemWrap
                            thumb={require('../../assets/images/orders.png')}
                            onClick={() => { }}
                            arrow="horizontal"
                            extra="全部订单"
                        >
                            <Text>我的订单</Text>
                        </ItemWrap >
                    </List>
                    <OrderWrap>
                        <OrderImg source={require('../../assets/images/wait.png')} /><Text>待付款</Text>
                        <OrderImg source={require('../../assets/images/no.png')} /><Text>未处理</Text>
                        <OrderImg source={require('../../assets/images/success.png')} /><Text>已完成</Text>
                        <OrderImg source={require('../../assets/images/close.png')} /><Text>已失效</Text>
                    </OrderWrap>
                </Wrap>
                <Wrap>
                    <Guide>
                        <GuideImg source={require('../../assets/images/user.png')} />
                        <GuideText>新手指南</GuideText>
                    </Guide>
                </Wrap>
                <ReButton type="warning" onClick={this.LoginOut}><Text>退出当前账号</Text></ReButton>
            </ScrollView>
        )
    }
}

export default PeronalItem


const Bg = styled.View`
    height: 220px;
    background: #FFCE43;
    display: flex;
    justify-content: center;
`

const Info = styled.View`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InfoName = styled.View`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Intro = styled.Text`
    margin-top: 10px;

`
const InfoImg = styled.Image`
    width: 60px;
    height: 60px;
`
const SexImg = styled.Image`
    height: 18px;
    width: 18px;
    margin-left: 5px;
`
const Img = styled.Image`
    width: 46px;
    height: 46px;
`

const Title = styled.Text`
    margin-top: 2px;
    textAlign:center;
`



const OrderWrap = styled.View`
    display: flex;
    padding: 14px 0;
    flex-direction: row;
    justify-content: space-around;
`



const OrderImg = styled.Image`
    margin-right: -24px;
`



const Wrap = styled.View`
    width: 90%;
    margin: 15px auto 0 auto;
    border-radius: 5px;
    background: #fff;
`

const Guide = styled.View`
    display: flex;
    flex-direction: row;
    width: 92%;
    margin: 0 auto;
    padding: 10px 0;
`

const GuideImg = styled.Image`
    width: 28px;
    height: 28px;
    margin-right: 5px;
`

const ItemWrap = styled(Item) `
   
`

const ReButton = styled(Button) `
    height: 40px;
    width: 90%;
    margin: 20px auto 0 auto;
`

const CardWrap = styled.View`
    width: 90%;
    margin: -25px auto 0 auto;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    background: #fff;
    justify-content: space-around;
`

 const ContentWrap = styled.View`
  padding: 5px 0;
  display: flex;
  flex-direction: column;
`
const TextName = styled.Text`
    margin-left: 20px;
`

const GuideText = styled.Text`
    margin-top: 5px;
`