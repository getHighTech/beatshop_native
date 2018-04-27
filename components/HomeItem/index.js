import React, { Component } from 'react'
import { View, Text, Image, ScrollView  } from 'react-native'
import PicCarousel from '../Carousel'

class HomeItem extends Component {
    render() {
        return (
            <ScrollView>
                <PicCarousel/>
            </ScrollView>

        )
    }
}

export default HomeItem;