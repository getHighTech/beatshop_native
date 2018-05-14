import React, { Component } from 'react'
import { View, Text, Image, ScrollView,TouchableOpacity  } from 'react-native'
import PicCarousel from '../Carousel'
import styled from 'styled-components'
import { Toast } from 'antd-mobile'
import { NavigationActions } from 'react-navigation'

class HomeItem extends Component {
    render() {
        return (
            <ScrollView>
                <PicCarousel/>
                <ImageWrap onPress={()=>this.props.navigation.navigate('GoodDetail')}>
                    <ReImage source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd6658abe164e32802f4040c65d96540.jpg?thumb=1&w=720&h=440'}}/>
                </ImageWrap>
                <ImageWrap onPress={()=>this.props.navigation.navigate('GoodDetail')}>
                    <ReImage source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd6658abe164e32802f4040c65d96540.jpg?thumb=1&w=720&h=440'}}/>
                </ImageWrap>
                <ImageWrap onPress={()=>this.props.navigation.navigate('GoodDetail')}>
                    <ReImage source={{uri: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/cd6658abe164e32802f4040c65d96540.jpg?thumb=1&w=720&h=440'}}/>
                </ImageWrap>
            </ScrollView>

        )
    }
}

export default HomeItem;


const ReImage = styled(Image)`
    height: 240px;
`
const ImageWrap = styled(TouchableOpacity)`

`