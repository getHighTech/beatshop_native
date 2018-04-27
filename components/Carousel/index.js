import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import {  Image, View, Text } from 'react-native'
import styled from 'styled-components'

class PicCarousel extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        slideIndex: 0,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/227151b5390a720f1dcfddbe3e4d2596.jpg?thumb=1&w=720&h=360', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/329c4cad20190902dec4d0fbb09e9963.jpg?thumb=1&w=720&h=360', 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/227151b5390a720f1dcfddbe3e4d2596.jpg?thumb=1&w=720&h=360'],
            });
        }, 100);
    }
    render() {
        return (
            <ViewWrap>
                <Carousel
                    autoplay={false}
                    infinite
                    selectedIndex={1}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                     <View key={val}>
                        <Img
                                source={{uri:`${val}`}}
                            />
                    </View>
                    ))}
                </Carousel>
            </ViewWrap>
        )

    }
}


export default PicCarousel;


const ViewWrap = styled.View`
`
const Img = styled.Image`
    height: 200px;
`