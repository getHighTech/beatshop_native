import React, { Component } from 'react'
import { View, Text, Image, ScrollView,TouchableOpacity  } from 'react-native'
import PicCarousel from '../Carousel'
import styled from 'styled-components'
import { Toast } from 'antd-mobile'

class HomeItem extends Component {
    render() {
        return (
                <Wrap>
                    <Img source={require('../../assets/images/background3.jpg')} />
                    <Card>
                        <Title>
                            享受精彩汽车生活享受
                        </Title>
                        <Button>
                            <BtText>立即加入</BtText>
                        </Button>
                    </Card>
                </Wrap>

        )
    }
}

export default HomeItem;

const Wrap = styled(View)`
    height: 260px;
    position:relative;

`
const Img = styled(Image)`
    width: 100%;
    height: 100%;
`

const Card = styled(View)`
    
    background-color: rgba(77, 77, 78, 0.5);
    padding: 40px 20px;
    width: 90%;
    margin: -220px  auto 0 auto;
    display: flex;
    align-items: center;
`
const Button = styled(View)`
   background: #FFD851;
   display: flex;
   align-items: center;
   width: 40%;
   margin: 30px auto 0 auto;
   padding: 10px 0;
   border-radius: 4px;
`

const BtText = styled(Text)`
    font-size: 16px;
`

const Title = styled(Text)`
    fontSize: 20px;
    color: #fff;
    z-index: 9999;
`

const ReImage = styled(Image)`
    height: 260px;
`
const ImageWrap = styled(TouchableOpacity)`

`