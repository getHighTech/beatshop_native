import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, Image } from 'react-native' 
import Ionicons from 'react-native-vector-icons/Ionicons'
class SaleGood extends Component {
    render() {
        return (
            <Wrap>
              <CardWrap>
                  <Img source={require('../../assets/images/webwxgetmsgimg.jpeg')} />
                  <RightWrap>
                      <Title ellipsizeMode='tail' numberOfLines={1}>
                          万人车汇黑卡万人车汇黑卡
                      </Title>
                      <InfoWrap>
                          <Info>价格:365</Info>
                          <Info>佣金:365</Info>
                      </InfoWrap>
                      <IconWrap>
                        <Ionicons name={"md-trash"}  size={20}  color="#FF582A" />
                        <Ionicons name={"md-share"}  size={20}  color="#FF582A" />
                      </IconWrap>
                  </RightWrap>
              </CardWrap>
              <CardWrap>
                  <Img source={require('../../assets/images/webwxgetmsgimg.jpeg')} />
                  <RightWrap>
                      <Title ellipsizeMode='tail' numberOfLines={1}>
                          万人车汇黑卡万人车汇黑卡
                      </Title>
                      <InfoWrap>
                          <Info>价格:365</Info>
                          <Info>佣金:365</Info>
                      </InfoWrap>
                      <IconWrap>
                        <Ionicons name={"md-trash"}  size={20}  color="#FF582A" />
                        <Ionicons name={"md-share"}  size={20}  color="#FF582A" />
                      </IconWrap>
                  </RightWrap>
              </CardWrap>
              <CardWrap>
                  <Img source={require('../../assets/images/webwxgetmsgimg.jpeg')} />
                  <RightWrap>
                      <Title ellipsizeMode='tail' numberOfLines={1}>
                          万人车汇黑卡万人车汇黑卡
                      </Title>
                      <InfoWrap>
                          <Info>价格:365</Info>
                          <Info>佣金:365</Info>
                      </InfoWrap>
                      <IconWrap>
                        <Ionicons name={"md-trash"}  size={20}  color="#FF582A" />
                        <Ionicons name={"md-share"}  size={20}  color="#FF582A" />
                      </IconWrap>
                  </RightWrap>
              </CardWrap>
            </Wrap>
        )
    }

}
export default SaleGood;

const Wrap = styled(View)`
`

const CardWrap = styled(View)`
    display: flex;
    flex-direction: row;
    background: #fff;
    border-width: 1;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 2;
    elevation: 1;
    width: 96%;
    margin: 0 auto 4px auto;
    padding: 0 0 12px 0;
`

const Img = styled(Image)`
    width: 40%;
    height: 140px;
`

const RightWrap = styled(View)`
    margin-left: 10px;
`

const Title = styled(Text)`
    font-weight: 400;
    margin: 10px 0 10px 0;
    font-size: 16px;
    width: 200px;
`

const InfoWrap = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
`

const Info = styled(Text)`
    color: #FF582A;
    font-size: 12px;
`

const IconWrap = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content:  space-between;
    margin: 0 10px;
`

const Icon = styled(Image)`

`
