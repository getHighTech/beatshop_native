import React, { Component } from 'react'
import styled from 'styled-components'
import { Button,List,Modal } from 'antd-mobile'
import { View,Text, Image, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Item = List.Item
const alert = Modal.alert


class PeronalItem extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    _ChangeShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    _LoginOut = () => {
        alert('登出', '确定登出?', [
            { text: '取消', onPress: () => console.log(`取消了`) },
            { text: '登出', onPress: () => this.props.SignOut() }
        ])
    }
    _ShowShopItem = () => {
        const { navigation } = this.props
        return(
            <View>
                <Item
                         thumb={
                            <IconWrap>
                                <Ionicons name={"md-add-circle"}  size={25}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {navigation.navigate('WareHouse')}}
                        arrow="horizontal"
                        >
                        新加商品
                </Item>
                <Item
                        thumb={
                            <IconWrap>
                                <Ionicons name={"md-alert"}  size={25}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {navigation.navigate('SaleGood')}}
                        arrow="horizontal"
                        >
                        正在出售的商品
                </Item>
             </View>
        )
    }

    render() {
        const { navigation } = this.props
        
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
                <Wrap>
                    <ReList>
                        <Item
                        thumb={
                        <IconWrap>
                            <Ionicons name={"md-contact"}  size={25}  color="#FF582A" />
                        </IconWrap>
                        }
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        我的资料
                        </Item>
                        <Item
                        thumb={
                            <IconWrap>
                                <Ionicons name={"ios-archive"}  size={30}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {this._ChangeShow()}}
                        arrow={this.state.show ? 'up' : 'down'}
                       
                        >
                        我的店铺
                        </Item>
                        {
                          this.state.show ? this._ShowShopItem() : null
                       }
                        <Item
                        thumb={
                            <IconWrap>
                                <Ionicons name={"ios-list-box"}  size={25}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        我的订单
                        </Item>
                        <Item
                         thumb={
                            <IconWrap>
                                <Ionicons name={"ios-cash"}  size={25}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        券、道具、会员
                        </Item>
                        <Item
                         thumb={
                            <IconWrap>
                                <Ionicons name={"ios-card"}  size={25}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {navigation.navigate('BankCard')}}
                        arrow="horizontal"
                        >
                        我的银行卡
                        </Item>
                        <Item
                         thumb={
                            <IconWrap>
                                <Ionicons name={"logo-whatsapp"}  size={25}  color="#FF582A" />
                            </IconWrap>
                            }
                        onClick={() => {}}
                        arrow="horizontal"
                        >
                        我的联系方式
                        </Item>
                    </ReList>
                </Wrap>
                <ReButton type="warning" onClick={this._LoginOut}><Text>退出当前账号</Text></ReButton>
            </ScrollView>
        )
    }
}

export default PeronalItem

const IconWrap = styled(View)`
    margin-right: 10px;
`

const ReList = styled(List)`
    margin-top: -48px;
`
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






const Wrap = styled.View`
    width: 90%;
    margin: 15px auto 0 auto;
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


const TextName = styled.Text`
    margin-left: 20px;
`

