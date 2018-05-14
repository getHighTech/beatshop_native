import React, { Component } from 'react'
import {View, Text, ScrollView } from 'react-native'
import styled from 'styled-components'
import Tabbar from '../components/GoodDetail/tabbar'
import GoodDetail from '../components/GoodDetail'
import Carousel from '../components/Carousel'


class GoodDetailContainer extends Component {
    static navigationOptions = {
        title: '商品详情',
    }
    render() {
        return(
            <Wrap>
                <Content>
                   <Carousel />
                   <GoodDetail />
                </Content>
                <Tabbar navigation={this.props.navigation}/>
            </Wrap>
        )
    }
}

export default GoodDetailContainer

const Wrap = styled(View)`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Header = styled(View)`
    height: 45px;
`
const Footer = styled(View)`
    height: 45px;
    background: red;
`
const Content = styled(ScrollView)`
    flex-grow: 1
`